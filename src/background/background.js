const customUa = 'hello world ua'
const targetUrl = 'https://eservice.rclgroup.com/e-commerce/spring/manageBooking';
const targetUrl1 = 'https://eservice.rclgroup.com/e-commerce/spring/index?action=65426f6f6b696e67'; //Url login page
const targetUrl2 = 'https://eservice.rclgroup.com/e-commerce/spring'; // Url root page (refresh page)
const globalData = { 'data': {} }

const onBeforeSendCallback = (details) => {
  for (var i = 0; i < details.requestHeaders.length; ++i) {
    if (details.requestHeaders[i].name === 'User-Agent') {
      details.requestHeaders.splice(i, 1);
      break;
    }
  }

  details.requestHeaders.push({
    name: 'User-Agent',
    value: customUa
  });

  return { requestHeaders: details.requestHeaders };
}

// 请求发现前监听 (Request discovery)
// Chrome 扩展提供的一个事件，用于在发送HTTP请求之前触发 (Event provided by Chrome extension is triggered before sending HTTP request)
const onBeforeSendHeadersListener = () => {
  chrome.webRequest.onBeforeSendHeaders.addListener(
    onBeforeSendCallback,
    { urls: ["<all_urls>"] },
    ["blocking", "requestHeaders"]
  )
}

chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.create({ url: targetUrl1 }, function (tab) {
    // 新标签页已创建，content.js 将自动注入（基于 manifest.json 中的规则）
  });
});

// 接收到数据并准备传输为eb (Receive data and prepare transmission to EB)
const onRuntimeMessageListener = () => {
  // 监听popup、background、content等发送的消息，允许不同部分之间进行通信和数据交换
  chrome.runtime.onMessage.addListener(async function (msg, sender, callback) {
    console.log("msg!!!", msg);
    if (msg.action === "sendData") {
      console.log('已经监听到了消息');
      // 调用函数来处理数据
      await sendDataToExternalApi(msg.data);
    }
    // const tabId = msg.tabId;
    if (msg.action === "bookingTwo") {
      chrome.tabs.sendMessage(msg.tabId, { action: "bookingTwo", data: globalData.data });
    } else if (msg.action === "bookingThree") {
      chrome.tabs.sendMessage(msg.tabId, { action: "bookingThree" });
    }
    if (msg.action === "submitComplete") {
      console.log("Received submitComplete message:", msg.data);
      // 这里可以进行进一步处理，比如根据收到的数据修改扩展的行为
      await onTabsUpdateListener()
    }
    if (msg.action === "startAuto") {
      globalData.data = msg.data
      await onTabsUpdateListener()
    }
  });
}

// 监听标签页更新 -----版本1 (Update supervision tab - ver 1)
const onTabsUpdateListener = async () => {
  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    console.log('Page update', changeInfo, tab)
    if (changeInfo.status === 'complete' && tab.active) {
      // 当标签页加载完成并且是激活状态时，向 content.js 发送消息
      // When the tab page is loaded and is activated, send a msg to Content.js
      if (tab && tab.url && tab.url.includes(targetUrl1)) {//判断是否为登录页面 (Check login page)
        chrome.tabs.sendMessage(tabId, { action: "login" });
      } else if (tab && tab.url && tab.url.includes(targetUrl2)) {
        // 点击第二个按钮 (Click the second button)
        chrome.tabs.sendMessage(tabId, { action: "tabUpdated" });
      }
      if (tab && tab.url && tab.url.includes("https://eservice.rclgroup.com/e-commerce/spring/eBookingWithoutRouting")) {
        chrome.tabs.sendMessage(tabId, { action: "bookingOne", data: globalData.data });
      }
      if (tab && tab.url && tab.url.includes("https://eservice.rclgroup.com/e-commerce/spring/eBookingWithOutRoutingDtl")) {
        chrome.tabs.sendMessage(tabId, { action: "checkPageContent", tabId: tabId });
      }
    }
  });
};

// 定时刷新当前激活的标签页----版本1 (Refresh the current actived tab - page version 1)
function refreshActiveTab() {
  // active: 当前处于活动状态（active）且位于当前窗口（currentWindow）
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    console.log('Refresh page', tabs);
    if (tabs.length && tabs[0].url && tabs[0].url.includes(targetUrl1)) {//判断是否为登录页面 (Check login page)
      console.log('This is the login page, you need to take actions for login');
      chrome.tabs.sendMessage(tabs[0].id, { action: "login" });
    } else if (tabs.length && tabs[0].url && tabs[0].url.includes(targetUrl2)) {
      // 发送消息到 content.js 来刷新页面 (Send msg to Content.js to refresh the page)
      chrome.tabs.sendMessage(tabs[0].id, { action: "refreshPage" });
    }
  });
}

// 将数据发送到外部接口 (Send the data to the external interface)
async function sendDataToExternalApi(data) {
  console.log('调用eb接口，将数据传输给eb');
  const externalApiUrl = "https://www.dadaex.cn/api/seaOrder/rclyp"; // 替换为您的外部接口 URL
  console.log('获取到了数据了', data);

  try {
    const response = await fetch(externalApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 如有必要，添加更多头部信息
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    console.log("数据已成功发送到外部接口", responseData);
  } catch (error) {
    console.error("发送数据到外部接口时出错", error);
  }
}

// 每30秒检查一次
// setInterval(refreshActiveTab, 30000);

const init = () => {
  onRuntimeMessageListener();
  onBeforeSendHeadersListener();
  // onTabsUpdateListener(); // 初始化标签页更新监听
}

init()
