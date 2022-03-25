/*
# Copyright 2022 Ball Aerospace & Technologies Corp.
# All Rights Reserved.
#
# This program is free software; you can modify and/or redistribute it
# under the terms of the GNU Affero General Public License
# as published by the Free Software Foundation; version 3 with
# attribution addendums as found in the LICENSE.txt
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# This program may also be used under the terms of a commercial or
# enterprise edition license of COSMOS if purchased from the
# copyright holder
*/

// Disabled until we fully support light theme
// describe('Toggle Theme', () => {
//   it('toggles from dark to light', () => {
//     cy.visit('/')
//     cy.get('#app').should('have.class', 'theme--dark')
//     cy.contains('Toggle Theme').click()
//     cy.get('#app').should('have.class', 'theme--light')
//   })
// })

describe('Toggle Navigation', () => {
  it('shows and hides the navigation pane', () => {
    cy.visit('/')
    cy.get('.v-navigation-drawer').should('be.visible')
    cy.get('.v-app-bar__nav-icon').click()
    cy.get('.v-navigation-drawer').should('be.hidden')
    cy.get('.v-app-bar__nav-icon').click()
    cy.get('.v-navigation-drawer').should('be.visible')
  })
})
