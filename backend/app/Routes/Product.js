'use strict'

const Route = use('Route')

Route.group('product', () => {
  /**
   * @swagger
   * /products:
   *   get:
   *     tags:
   *       - Product
   *     summary: Get products
   *     parameters:
   *       - $ref: '#/components/parameters/ListQuery'
   *     responses:
   *       200:
   *         description: products
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                   $ref: '#/components/schemas/Product'
   */
  Route.get('/', 'Api/ProductsController.index')

  /**
   * @swagger
   * /products/{id}:
   *   get:
   *     tags:
   *       - Product
   *     summary: Returns product
   *     parameters:
   *       - $ref: '#/components/parameters/Id'
   *       - $ref: '#/components/parameters/SingleQuery'
   *     responses:
   *       200:
   *         description: product
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Product'
   *       404:
   *         $ref: '#/components/responses/NotFound'
   */
  Route.get('/:id', 'Api/ProductsController.show').instance('App/Models/Instaaccount')

  Route.post('/new', 'Api/ProductsController.store').validator('StoreProduct')

}).prefix('/api/products')
