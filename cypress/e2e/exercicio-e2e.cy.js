/// <reference types="cypress" />

import { fakerPT_BR as faker, fakerPT_BR } from '@faker-js/faker'
import produtosPage from "../support/page_objects/produtos.Page";
import fa from 'faker/lib/locales/fa';

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {

  beforeEach(() => {
      cy.visit('/produtos')
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
      
    cy.fixture('produtos').then(dados => {

        produtosPage.buscarProduto(dados[0].nomeProduto)
        produtosPage.addCarrinho(dados[0].tamanho, dados[0].cor, dados[0].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
        produtosPage.buscarProduto(dados[1].nomeProduto)
        produtosPage.addCarrinho(dados[1].tamanho, dados[1].cor, dados[1].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
        produtosPage.buscarProduto(dados[2].nomeProduto)
        produtosPage.addCarrinho(dados[2].tamanho, dados[2].cor, dados[2].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[2].nomeProduto)
        produtosPage.buscarProduto(dados[3].nomeProduto)
        produtosPage.addCarrinho(dados[3].tamanho, dados[3].cor, dados[3].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[3].nomeProduto)
        cy.get('#cart > .dropdown-toggle').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        cy.checkout(faker.person.firstName(), faker.person.lastName(), fakerPT_BR.location.streetAddress(), fakerPT_BR.location.city(), fakerPT_BR.location.zipCode(), faker.phone.number({ style: 'international' }), faker.internet.email())
        cy.get('#payment_method_cod').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')

    })
      
  });
  
});