// @ts-check
const{test,expect}=require('@playwright/test');

test('First Basic Test',async()=>{
expect(12).toBe(12);
});

test('second Basic Test',async()=>{
expect(13).toBe(13);
});

test('third Basic Test',async()=>{
expect("Anbesaw Belete mekonne test").toContain("Anbesaww");
})

test('the last examle',async()=>{
  expect("Anbesaw Belete Mekonnen".includes("Anbesaw")).toBeTruthy();
})

test.only('ttilte Verificaton',async({page})=>{
   await page.goto("https://orangehrm.com/");
   expect(page).toHaveURL('https://orangehrm.com/')
   console.log()
   expect(page).toHaveTitle('All in One HR Software for Businesses');
})