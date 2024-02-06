class DynamicTablesPage {

    /*Locator*/

    getHeader(){
        return cy.get('.is-size-3')
    }

    getTableHeader(){
        return cy.get('.header')
    }

    getRows(){
        return cy.get('tr>td')
    }

    getProductButton(){
        return cy.get('#add_product_btn')
    }

    getTotal(){
        return cy.get('#total_amount')
    }

    getModalTitle() {
        return cy.get('#modal_title')
      }

    getXbutton(){
        return cy.get('.delete')
    }

    getLabel(){
        return cy.get('.field>label')
    }

    getSubmitBtn(){
        return cy.get('#submit')
    }

   getInputs(){
    return cy.get('.control>input')
   }

   getQuantityInput(){
    return cy.get('#quantity')
   }
   getProductInput(){
    return cy.get('#product')
   }

   getPriceInput(){
    return cy.get('#price')
   }

   getNewRow(){
    return cy.get(':nth-child(4) > td')
   }

    /* Method */
   getclickOnAddBtn(button) {
    this.getBtnEnabled(button).click()
   }
 
    getBtnEnabled(button) {
     switch (button) {
         case 'ADD PRODUCT':
             return this.getProductButton()
         case 'X':
             return this.getXbutton()
         case 'SUBMIT':
             return this.getSubmitBtn()
         default:
             throw new Error(`Case not found ${button}`)
      }
    }
     

   
 } 

  
module.exports = DynamicTablesPage