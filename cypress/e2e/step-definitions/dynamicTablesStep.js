const { Given, Then , When} = require('@badeball/cypress-cucumber-preprocessor')
const DynamicTablesPage = require('../../pages/DynamicTablesPage')

const dynamicTablespage = new DynamicTablesPage()


Given('the user is on {string}', (url) => {
	cy.visit(url)
})


Then(/^the user should see the "([^"]*)" heading$/, (heading) => {
    dynamicTablespage.getHeader().should('have.text', heading)
	
})


Then(/^the user should see the table with the headers below$/, (dataTable) => {
	const arr = dataTable.rawTable.flat()

    dynamicTablespage.getTableHeader(($el,index) => {
        cy.wrap($el).should('have.text',arr[index])
    })
      
    
})


Then(/^the user should see the table with the rows below$/, (dataTable) => {
	const row = dataTable.rawTable.flat()
    dynamicTablespage.getRows(($el, index) => {
        cy.wrap($el).should('have.text', row[index])
    })
})





Then(/^the user should see the "([^"]*)" text displayed$/, (total) => {
    dynamicTablespage.getTotal(total)
	
})



When(/^the user clicks on the "([^"]*)" button$/, (button) => {
	dynamicTablespage.getclickOnAddBtn(button)
})




Then(/^the user should see the "([^"]*)" modal with its heading$/, (modalTitle) => {
	dynamicTablespage.getModalTitle().should('have.text', modalTitle)
    
})

Then(/^the user should see the "([^"]*)" button is enabled$/, (button) => {
	dynamicTablespage.getBtnEnabled(button).should('be.enabled')
})


Then(/^the user should see the "([^"]*)" label$/, () => {
    const arr =  ['Please select the quantity', 'Please enter the name of the product', 'Please enter the price of the product']
    dynamicTablespage.getLabel().each(($el, index) => {
           cy.wrap($el, index).should('have.text', arr[index])
       })
	
})


Then(/^the user should see the "([^"]*)" input box is enabled$/, () => {
    dynamicTablespage.getQuantityInput()
	
})


Then(/^the user should not see the "([^"]*)" modal$/, () => {
	dynamicTablespage.getModalTitle().should('not.exist')

})

Then(/^the user enters the quantity as "([^"]*)"$/, (input) => {
	dynamicTablespage.getQuantityInput().type(input)
})

Then(/^the user enters the product as "([^"]*)"$/, (product) => {
	dynamicTablespage.getProductInput().type(product)

})

Then(/^the user enters the price as "([^"]*)"$/, (price) => {
	dynamicTablespage.getPriceInput().type(price)
})

Then(/^the user should see the table with the new row below$/, (dataTable) => {
	const table = dataTable.rawTable.flat()
	
	dynamicTablespage.getNewRow().each(($el, index) => {
		cy.wrap($el.text()).should('eq', table[index])
	})
})





  
  

  
















