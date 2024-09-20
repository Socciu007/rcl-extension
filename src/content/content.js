function setScript({ code = '', needRemove = true } = params) {
  let textNode = document.createTextNode(code)
  let script = document.createElement('script')

  script.appendChild(textNode)
  script.remove()

  let parentNode = document.head || document.documentElement

  parentNode.appendChild(script)
  needRemove && parentNode.removeChild(script)
}

let globalData = { "AAA": "123" }
// let globalData = {
//   id: 150,
//   userId: null,
//   ebNo: 'FYJK000020-150',
//   type: false,
//   self: false,
//   spell: false,
//   startPort: 599,
//   uploadPort: 3108,
//   purposePort: 3108,
//   shipCompany: 9,
//   sailingTime: '2023-11-17',
//   putType: 0,
//   declare: '',
//   interior: false,
//   trailer: false,
//   trailerTime: null,
//   custom: false,
//   entrustNub: '',
//   ladingCount: 0,
//   ladingNub: '',
//   blNo: '1345',
//   blNoTsl: '11111',
//   putCode: '',
//   freightTerms: false,
//   transportTerms: '',
//   appointNub: '',
//   matchTaime: '',
//   shipName: 'KTY 2411S',
//   voyage: 'RNV2',
//   portVoyage: '',
//   bindingNotice: '',
//   startPortTime: '',
//   stopPortTime: '',
//   inPortCode: '',
//   overTime: '',
//   stopPassTime: '',
//   main: true,
//   tdRemark: null,
//   shipAgency: 'COSCO',
//   leak: 0,
//   canPut: 0,
//   startPortalias: null,
//   purposePortalias: null,
//   uploadPortalias: null,
//   trailerAddress: '',
//   tetd: '',
//   vgmendTime: '',
//   addspell: null,
//   qy: 0,
//   dcstatus: 0,
//   tdstatus: 0,
//   cdstatus: 0,
//   vdstatus: 0,
//   cdreceipt: null,
//   ebId: 0,
//   receiptRemark: null,
//   endPortPierId: null,
//   xhxxStatus: 0,
//   mentionCon: null,
//   managelcl: false,
//   outside: 2,
//   icn: null,
//   warehouseName: null,
//   realityLeavePortTime: null,
//   realityClosePortTime: null,
//   exportBoxStartTime: null,
//   isf5: '0',
//   emptyId: null,
//   acidNumber: null,
//   vatNumber: null,
//   egyptAcidNumber: null,
//   createTime: '2023-11-16T09:00:07.000Z',
//   updateTime: '2024-03-04T05:43:09.000Z',
//   routeId: null,
//   containner_vgms: [
//     {
//       cType: 40,
//       boxNub: 'TEST1111233',
//       weight: '0.000',
//       volume: '0.000',
//       sealNUb: '',
//       amount: 10,
//       hostMark: true,
//       method: false
//     }
//   ],
//   sea_order_bind: { routeId: 0, routeCode: 'SKT' },
//   sea_order_contacts: [
//     {
//       id: 181523,
//       oid: 150,
//       cabinId: 0,
//       lclid: 0,
//       type: 2,
//       master: 'SAME AS CONSIGNEE',
//       address: '',
//       firmCode: null,
//       country: null,
//       phone: null,
//       aeo: null,
//       spName: null,
//       spType: null,
//       spContact: null,
//       qy: 0,
//       createTime: '2023-11-16T09:00:07.000Z',
//       updateTime: '2024-03-04T05:43:09.000Z'
//     },
//     {
//       id: 181522,
//       oid: 150,
//       cabinId: 0,
//       lclid: 0,
//       type: true,
//       master: 'ASAHI AUTO SPARE PARTS L.L.C',
//       address: 'SHOP NO 18, NAIF 7 STATES BLDG, \n' +
//         'BEHIND KHANSAHEB PARKING, DIERA \n' +
//         'DUBAI,UNITED ARAB EMIRATES',
//       firmCode: null,
//       country: null,
//       phone: null,
//       aeo: null,
//       spName: null,
//       spType: null,
//       spContact: null,
//       qy: 0,
//       createTime: '2023-11-16T09:00:07.000Z',
//       updateTime: '2024-03-04T05:43:09.000Z'
//     },
//     {
//       id: 181521,
//       oid: 150,
//       cabinId: 0,
//       lclid: 0,
//       type: false,
//       master: 'YANCHENG RELY IMPORT & EXPORT \nCORP., LTD.',
//       address: 'RM.401 TOWER #16,ZHONG YIN HAIHUA \n' +
//         'PLAZA NO.59,JIANJUN\n' +
//         'RD.,YANCHENG,CHINA',
//       firmCode: null,
//       country: null,
//       phone: null,
//       aeo: null,
//       spName: null,
//       spType: null,
//       spContact: null,
//       qy: 0,
//       createTime: '2023-11-16T09:00:07.000Z',
//       updateTime: '2024-03-04T05:43:09.000Z'
//     }
//   ],
//   goods: [
//     {
//       id: 306,
//       oid: 150,
//       cabinId: 0,
//       lclid: 0,
//       shantou: null,
//       name: 'TEST!!!',
//       description: '你好',
//       cargoType: false,
//       amount: '10',
//       unit: 'BAGS',
//       weight: '2000.000',
//       volume: '1111.000',
//       hscode: '160413',
//       dangerClass: null,
//       unNub: null,
//       dangerCode: null,
//       dangerPoint: '0',
//       packType: null,
//       packDesc: null,
//       packWeight: null,
//       packSize: null,
//       grossWeight: null,
//       quarantineCode: null,
//       quarantineName: null,
//       sign: null,
//       qy: 0,
//       conid: null,
//       createTime: '2023-11-16T09:00:07.000Z',
//       updateTime: '2024-03-04T05:43:09.000Z'
//     }
//   ],
//   startPortData: { id: 599, name: '上海', nameEn: 'SHANGHAI', code: 'CNSHA' },
//   purposePortData: { id: 3108, name: '新加坡', nameEn: 'HO CHI MINH CITY', code: 'VNSGN' },
//   uploadPortsea: { id: 3108, name: '新加坡', nameEn: 'HO CHI MINH CITY', code: 'VNSGN' },
//   carrier: {
//     id: 9,
//     code: 'COSCO',
//     name: '中远',
//     nameEn: 'COSCO',
//     scacCode: 'COSU'
//   }
// }

const boxMapping = [
  "20GP", // 0
  "40GP",
  "40HC",
  "20FR",
  "40FR", // 4
  "20RF",
  "40RF", // 6
  "20OT",
  "40OT",
  "40OH", // 9
  "20TK",
  "40TK",
  "20HT",
  "40HT", // 13
  "45HC",
  "20GD",
  "40GD"
];

setScript({
  // code: `alert ('hello world content')`
})

// 监听页面是否完毕，完毕后 点击第一个按钮 自动触发------版本1
document.addEventListener('DOMContentLoaded', function () {
  console.log("Added new page");
  const element = document.querySelector('div.tab_nav_selc a:nth-child(2)');
  if (element) {
    const element2 = element.querySelector('li');
    const classes = element2.classList; // 获取li元素的所有类
    if (classes['0'] !== 'actv_tab') {
      element.click()
    }
  }
});

// Listen to messages from popup.js and background.js
chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
  console.log('Message received from App.vue:', request);
  if (request.action === "submitComplete") {
    const logOut = document.querySelector("body > div.container-fluid.hidePrint > header > nav > div.navbar-collapse > ul.navbar-nav.my-lg-0 > li:nth-child(1) > a.nav-link.dropdown-toggle.text-muted.pt-0 > div")
    if (logOut) {
      const element = document.querySelector("#section1 > div.row > div.col-lg-2.px-0 > div > ul > a:nth-child(2) > li > div > div.col-10")
      if (element) {
        element.click();
        setTimeout(() => {
          const element1 = document.querySelector("body > div > section > div.row > div.col-lg-7 > div > div > div > div:nth-child(2) > div.col-md-6.pad_25_mb > a > div > div.col-md-9.head_text_sub")
          if (element1) {
            element1.click();
          }
        }, 500);
      }
    }
  }
  if (request.action === "refreshPage") {
    console.log('Refresh');
    // 使用 location.replace 来刷新页面而不产生表单重提交的提示
    // window.location.replace(window.location.href);
    postForm();
  }
  if (request.action === 'login') {
    // globalData = request.data
    const loginBtn = document.querySelector("#onLoginID")
    if (loginBtn) {
      login()
    }
    // const logOut =  document.querySelector("body > div.container-fluid.hidePrint > header > nav > div.navbar-collapse > ul.navbar-nav.my-lg-0 > li:nth-child(1) > a.nav-link.dropdown-toggle.text-muted.pt-0 > div")
    // console.log(logOut);
    // if(logOut) {
    //   const element = document.querySelector("#section1 > div.row > div.col-lg-2.px-0 > div > ul > a:nth-child(2) > li > div > div.col-10")
    //   if(element) {
    //     element.click();
    //     setTimeout(() => {
    //       const element1 = document.querySelector("body > div > section > div.row > div.col-lg-7 > div > div > div > div:nth-child(2) > div.col-md-6.pad_25_mb > a > div > div.col-md-9.head_text_sub")
    //       if(element1) {
    //         element1.click();
    //       }
    //     }, 500);
    //   }
    // }
  }
  if (request.action === "tabUpdated") {
    console.log('Click the second button');
    const element = document.querySelector("#section1 > div.row > div.col-lg-2.px-0 > div > ul > a:nth-child(2) > li > div > div.col-10")
    if (element) {
      element.click();
    }
    setTimeout(() => {
      const element1 = document.querySelector("body > div > section > div.row > div.col-lg-7 > div > div > div > div:nth-child(2) > div.col-md-6.pad_25_mb > a > div > div.col-md-9.head_text_sub")
      if (element1) {
        element1.click();
      }
    }, 500);
  }
  if (request.action === "startEShipping") {
    const homeElement = document.querySelector("#headerLogo")
    await homeElement.click()
  }
  // Execute click third button to hide booking list
  if (request.action === "eShippingDashboard") {
    console.log('Click the third button');
    const element = document.querySelector("#section1 > div.row > div.col-lg-2.px-0 > div > ul > a:nth-child(3) > li > div > div.col-9")
    if (element) {
      await element.click();
    }
  }
  // Start to handle editing of booking
  if (request.action === "editBooking") {
    const container = document.querySelectorAll("#eSiDataTable")[0]
    if (container) {
      await delay(3000)
      const element1 = container.querySelector("tbody#eSiDataTable > tr:nth-child(1) > td:nth-child(5) > i")
      // const element2 = container.querySelectorAll("tr:nth-child(1)")[0]
      if (element1) {
        await element1.click();
      }
    }
  }
  // Execute to handle editing of booking
  if (request.action === "executeEditBooking") {
    const bookingData = request.data
    console.log(bookingData);
    const element = document.querySelector("#eBookingCreationSaveTp > div.container-fluid.currentSection.defaultDisplayNone > section > div.col-12.mb-2 > div > div.col-lg-2.col-md-3.col-12.d-flex.justify-content-end > div > div")
    if (element) {
      await element.click();
    }

    // Edit page 1
    setTimeout(async () => {
      // SHIPMENT & SAILING
      const event = new Event('change', { bubbles: true })
      const placeOfIssueElement = document.getElementById('placeDateOfIssue')
      placeOfIssueElement.value = bookingData.placeOfIssue
      placeOfIssueElement.dispatchEvent(event)

      const placeOfReceiptElement = document.getElementById('placeOfReceipt')
      placeOfReceiptElement.value = bookingData.placeOfReceipt
      placeOfReceiptElement.dispatchEvent(event)

      const polElement = document.getElementById('pol')
      polElement.value = bookingData.portOfLoading
      polElement.dispatchEvent(event)

      const podElement = document.getElementById('pod')
      podElement.value = bookingData.portOfDischarge
      podElement.dispatchEvent(event)

      const placeOfDeliveryElement = document.getElementById('placeOfDelivery')
      placeOfDeliveryElement.value = bookingData.portOfDelivery
      placeOfDeliveryElement.dispatchEvent(event)

      const blTypeElement = document.getElementById('blType')
      blTypeElement.value = bookingData.blType
      blTypeElement.dispatchEvent(event)

      // SHIPMENT DETAILS
      const telephoneElement = document.getElementById('telephone')
      telephoneElement.value = bookingData.tel
      telephoneElement.dispatchEvent(event)

      const emailElement = document.getElementById('email')
      emailElement.value = bookingData.email
      emailElement.dispatchEvent(event)

      const additionMls0Element = document.getElementById('additionMls0')
      additionMls0Element.value = bookingData.moreEmail
      additionMls0Element.dispatchEvent(event)

      const paymentTermElement = document.getElementById('paymentTerm')
      paymentTermElement.value = bookingData.payment
      paymentTermElement.dispatchEvent(event)

      if (bookingData.location) {
        const destinyCountryElement = document.getElementById('destiny-country')
        await destinyCountryElement.click()
      }

      const payerCompanyElement = document.getElementById('freightPaymentTermCompName')
      payerCompanyElement.value = bookingData.payerCompany
      payerCompanyElement.dispatchEvent(event)

      // CUSTOMER DETAILS
      const shipperNameElement = document.getElementById('shipperName')
      shipperNameElement.value = bookingData.shipperName
      shipperNameElement.dispatchEvent(event)

      const shipperAddElement = document.getElementById('shipperAdd')
      shipperAddElement.value = bookingData.shipperAdd
      shipperAddElement.dispatchEvent(event)

      const consigneeNameElement = document.getElementById('consigneeName')
      consigneeNameElement.value = bookingData.consigneeName
      consigneeNameElement.dispatchEvent(event)

      const consigneeAddElement = document.getElementById('consigneeAdd')
      consigneeAddElement.value = bookingData.consigneeAdd
      consigneeAddElement.dispatchEvent(event)

      const notifyPartyNameElement = document.getElementById('notifyPartyName')
      notifyPartyNameElement.value = bookingData.notifyPartyName
      notifyPartyNameElement.dispatchEvent(event)

      const notifyPartyAddElement = document.getElementById('notifyPartyAdd')
      notifyPartyAddElement.value = bookingData.notifyPartyAdd
      notifyPartyAddElement.dispatchEvent(event)

      // Save information
      const submitElement = document.querySelector("#eBookingCreationSaveTp > div.container-fluid.currentSection.defaultDisplayNone > section > div.col-12.mb-2 > div > div.col-lg-2.col-md-3.col-12.d-flex.justify-content-end > div > button")
      if (submitElement) {
        await submitElement.click();
        await delay(3000)
        const enterElement = document.querySelector("body > div.swal-overlay.swal-overlay--show-modal > div > div.swal-footer > div > button")
        if (enterElement) {
          await enterElement.click();
        }
        const nextElement = document.querySelector("#eBookingCreationSaveTp > div.container-fluid.currentSection.defaultDisplayNone > section > div.row > div:nth-child(4) > div > div:nth-child(3)");
        if (nextElement) {
          await nextElement.click();
        }
      }
    }, 500)

    // Edit page 2
    setTimeout(async () => {
      const elementEdit = document.querySelector("#eBookingCreationSaveTp > div.container-fluid.nextSection.defaultDisplayNone > section > div.grid-container > div.col-12 > div > div.col-lg-2.col-md-3.col-12.d-flex.justify-content-end > div > div.col-lg-5.col-md-5.col-3.editBtnShipInstr.bookNowButton")
      if (elementEdit) {
        await elementEdit.click();
      }
      const event = new Event('change', { bubbles: true });
      const containerElement = document.getElementById('containerNo');
      containerElement.value = bookingData.containerNo;
      containerElement.dispatchEvent(event);

      const carrierSealElement = document.getElementById('carrierSeal');
      carrierSealElement.value = "SHA2413594";
      carrierSealElement.dispatchEvent(event);

      const shipperSealElement = document.getElementById('shipperSeal');
      shipperSealElement.value = "Shipper";
      shipperSealElement.dispatchEvent(event);

      const ofPackagesElement = document.getElementById('ofPackages');
      ofPackagesElement.value = "920";
      ofPackagesElement.dispatchEvent(event);

      const grossContainerWeightElement = document.getElementById('grossContainerWeight');
      grossContainerWeightElement.value = "23092";
      grossContainerWeightElement.dispatchEvent(event);

      const grossCargoMeasurementElement = document.getElementById('grossCargoMeasurement');
      grossCargoMeasurementElement.value = "25";
      grossCargoMeasurementElement.dispatchEvent(event);

      const pkgKindElement = document.querySelector('#result_dtl > tr > td:nth-child(14) > i.fa.fa-search');
      await pkgKindElement.click();
      setTimeout(async () => {
        const pkgKindFindCodeElement = document.getElementById('pkgKindFindCode');
        pkgKindFindCodeElement.value = 'BAG';
        await selectOption('#select2-pkgKindColumnBy-container', '.select2-results__options', 'Package Name');

        const searchElement = document.querySelector('#PKGModal > div > div > div > div.container-fluid > div > div:nth-child(2) > div.col-md-4 > div.btn_ctn_ttn2');
        await searchElement.click();

        const page2Element = document.querySelector('#paginationPackageKind > div > div > ul > li:nth-child(3) > a');
        await page2Element.click();

        const choiceElement = document.querySelector('#PKGbodyModal > tr:nth-child(9)');
        await choiceElement.click();
      }, 1000);
    }, 500);
  }
  // 填入数据 頁面1 (Scrape data in page 1)
  if (request.action === "bookingOne") {
    globalData = request.data
    const element = document.querySelector("#eBookingCreation > div.container-fluid.shrink > div.bookingMergedPage.page-wrapper.first_section.currentSection > div > div > div:nth-child(5) > div > div:nth-child(4) > div.col-lg-7 > div")
    await element.click()
    // pol和pod操作
    await selectOption("#select2-bookingPol-container", "#select2-bookingPol-results", globalData["startPortData"].nameEn);
    await selectOption("#select2-bookingPod-container", "#select2-bookingPod-results", globalData["purposePortData"].nameEn);
    // 填入ebNo: Customer Reference
    const ebNoElement = document.querySelector("#customerReference")
    ebNoElement.value = globalData['ebNo']
    // 箱型选择
    const event = new Event('change', { bubbles: true })
    const ctnSize = 40//boxMapping[globalData['containner_vgms'][0]['cType']]
    const ctnType = "BU"//boxMapping[globalData['containner_vgms'][0]['cType']].slice(2)
    const typeElement = document.getElementById('type0')
    // 设置 select 元素的 value，以选择对应的 option
    typeElement.value = ctnType
    typeElement.dispatchEvent(event)
    const sizeElement = document.getElementById('size0')
    sizeElement.value = ctnSize
    sizeElement.dispatchEvent(event)
    // 箱子数量
    const ctnCount = document.querySelector("#laden0")
    ctnCount.value = 1
    // 毛总
    const cargoWeight = document.querySelector("#grossContainerWeight0")
    cargoWeight.value = globalData['goods'][0]['weight']
    await ctnCount.click()
    // await delay(1000)
    await cargoWeight.click()
    // await delay(1000)
    // hsCode选择
    const hsClick = document.querySelector("#indexShipperDialog0")
    await hsClick.click()
    // 使用 setTimeout 等待对话框内的元素渲染
    setTimeout(async () => {
      // 假设这是对话框内您想要点击的元素
      const input1 = document.querySelector("#commodityCode")
      if (input1) {
        input1.value = globalData['goods'][0]['hscode']
        const button1 = document.querySelector("#updateModal > div > div > div > div.container-fluid > div > div:nth-child(2) > div.col-md-4 > div.btn_ctn_ttn2")
        await button1.click()
        const resultHs = document.querySelector("#hsCodePopup0")
        await resultHs.click()
        const inputHs = document.querySelector("#noOfPackages0")
        inputHs.value = globalData['goods'][0]['amount']
        const buttonHs = document.querySelector("#grossWeight0")
        buttonHs.value = globalData['goods'][0]['weight']
        setTimeout(() => {
          const next1 = document.querySelector(".btn_ctn_ttn2.next-button")
          next1.click()
        }, 500);
      }
    }, 3000);
  }
  if (request.action === "checkPageContent") {
    if (document.querySelector("#eBookingCreation > div.container-fluid.shrink > div.bookingMergedPage.page-wrapper.third_section.currentSection > div > div.col-lg-8.mobRes > div.head_part_sec")) {
      chrome.runtime.sendMessage({ action: "bookingTwo", tabId: request.tabId });
    } else {
      chrome.runtime.sendMessage({ action: "bookingThree", tabId: request.tabId });
    }
  }
  // 填入 页面2 (Scrape data in page 2)
  if (request.action === "bookingTwo") {
    console.log("进入该页面一次")
    globalData = request.data
    const parentNodes = document.querySelectorAll('.container_title')
    const voyage = globalData['voyage']
    const shipName = globalData['shipName']
    parentNodes.forEach(parent => {
      // 假设我们对每个父节点下的第一个和第二个 div 感兴趣
      const div1 = parent.querySelector('div:nth-of-type(1)')
      const div2 = parent.querySelector('div:nth-of-type(2)')

      // 检查这两个 div 是否满足某些条件，这里以文本内容为例 (Check text content in div with globalData)
      if (div1 && div2 && div1.textContent.includes(voyage) && div2.textContent.includes(shipName)) {
        // 如果两个 div 都满足条件，则执行点击操作
        // 这里以 div1 被点击为例，根据实际情况调整
        parent.click()
      }
    });
    const next2 = document.querySelector("#eBookingCreation > div.container-fluid.shrink > div.bookingMergedPage.page-wrapper.third_section.currentSection > div > div.col-lg-8.mobRes > div.clas_sec_tel > div.row > div.col-md-4.sub > div.btn_ctn_ttn2.next-button")
    next2.click()

    await delay(3000)
    console.log("进入3");
    // 发货人填写
    const event = new Event('change', { bubbles: true })
    const shipperName = globalData["sea_order_contacts"].filter(contact => contact.type === true);
    const shipper = document.querySelector("#shipperName")
    shipper.value = shipperName[0].master
    const contactPerson = document.querySelector("#contact")
    contactPerson.value = "GRACE"
    const contactPersonEmail = document.querySelector("#email")
    contactPersonEmail.value = "GRACE@SFYF.CN"
    // 选择日期
    const etdTime = globalData['sailingTime'].split("-")
    const lastTime = `${+etdTime[2] - 6}/${etdTime[1]}/${etdTime[0]}`
    const pickupPlan = document.querySelector("#dateEmptyPickup")
    pickupPlan.value = lastTime
    const cargoAvailability = document.querySelector("#dateCargoAvailability")
    cargoAvailability.value = lastTime
    cargoAvailability.dispatchEvent(event)
    //提交
    const pushBtn = document.querySelector("#eBookingCreation > div.container-fluid.shrink > div.bookingMergedPage.page-wrapper.fifth_section.currentSection > div.row > div.col-md-12.sub.mar_15_fr.btm_mar_30 > div.btn_ctn_ttn2.tb_bt_ct.next-buttons.mt-2")
    if (pushBtn) {
      await pushBtn.click()
    }
  }
});

function delay(duration) {
  return new Promise(resolve => setTimeout(resolve, duration));
}

async function selectOption(select2ContainerId, resultsContainerId, value) {
  const select2Container = document.querySelector(select2ContainerId);
  if (!select2Container) {
    console.log('Select2 element not found');
    return; // 或者抛出一个错误
  }

  select2Container.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window }));
  await delay(500); // 等待下拉菜单打开

  const searchInput = document.querySelector("body > span > span > span.select2-search.select2-search--dropdown > input");
  if (searchInput) {
    searchInput.value = value;
    searchInput.dispatchEvent(new Event('input', { bubbles: true }));
    await delay(500); // 等待搜索结果

    const resultsContainer = document.querySelector(resultsContainerId);
    const firstResult = resultsContainer?.querySelector("li:first-of-type");
    if (firstResult) {
      firstResult.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window }));
      firstResult.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true, view: window }));
      firstResult.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      // 等待结果被选中，如果需要
      await delay(100); // 调整这个延时根据需要
    }
  }
}

function postForm() {
  // 创建一个新的 HTML 表单元素
  var form = document.createElement('form');
  form.method = 'POST';
  // 设置表单提交的地址为当前页面的 URL
  form.action = window.location.href;
  // 假设你需要提交的数据是以下这个对象
  var data = {
    name: 'value'
  };
  // 遍历数据对象中的每个键值对
  for (var key in data) {
    // 确保 key 是对象自己的属性，不是原型链上的
    if (data.hasOwnProperty(key)) {
      // 创建一个隐藏的输入元素
      var hiddenField = document.createElement('input');
      hiddenField.type = 'hidden'; // 设置为隐藏字段
      hiddenField.name = key; // 设置字段的名字
      hiddenField.value = data[key]; // 设置字段的值
      // 将隐藏输入元素添加到表单中
      form.appendChild(hiddenField);
    }
  }
  // 将表单添加到当前文档的 body 中
  document.body.appendChild(form);
  // 提交表单
  form.submit();
}

// 页面加载完成后的操作 (The action after the page is loaded)
window.onload = function () {
  // 执行数据获取函数

  // 开始
  // clickTargetNode()

};

// async function fetchData() {
//   const url = `${'http://localhost:3001/cargosmart/edi/booking'}?${id}`
//   const data = { bookingNo: null, status: "C" };

//   try {
//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         // 'Authorization': 'Bearer TOKEN', // 如果需要的话，添加您的认证头
//         // 其他可能需要的头
//       },
//       body: JSON.stringify(data)
//     });

//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     const jsonData = await response.json();
//     globalData = response.data
//     console.log('依然可以获取数据');
//     // 将数据发送到 background.js
//     chrome.runtime.sendMessage({ action: "sendData", data: jsonData });
//     console.log('并发送数据', jsonData);
//   } catch (error) {
//     console.error('There has been a problem with your fetch operation:', error);
//   }
// }

// click here to start
function clickTargetNode() {
  // 目标节点的选择器
  const targetNodeSelector = "#eBookingCreation > div.container-fluid.shrink > div.bookingMergedPage.page-wrapper.first_section.currentSection > div > div > div:nth-child(5) > div > div:nth-child(4) > div.col-lg-7 > div";
  const targetNode = document.querySelector(targetNodeSelector);
  if (targetNode) {
    targetNode.click(); // 如果找到节点，则点击它
    console.log('目标节点已被点击');
  } else {
    console.log('未找到目标节点');
  }
}

async function login() {
  const userNameDom = document.getElementById('username')
  userNameDom.value = 'shafai2022'
  const passwordDom = document.getElementById('password')
  passwordDom.value = 'SHfy*2022'
  const loginBtn = document.getElementById('onLoginID')
  loginBtn.click()
}
