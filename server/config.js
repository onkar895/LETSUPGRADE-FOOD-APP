
export const options = {

    swaggerDefinition: {
        openapi: "3.0.0",
        info: 
            {
                title: "Food Ordering App",
                version:"1.0.0",
                contact: {
                  name: "Aditya sharma",
                  email:"Aditya22950@gmail.com",
                },
                license: {
                  name: "Apache 2.0",
                  url: "http://apache.org/"
  
                },
            },
              servers:[
                
                 {
                  url:"http://localhost:8000/"
                },
            ],
            paths:
                       {
               
                              // user endpoints
     //for adding user                         
                          '/add':{
                                
                                post:{
                                  
                                  
                                  summary:"post your details",
                                  produces:["application/json"],
                                  consumes: ["application/json"],
                                  
                                  requestBody:{
                                           description:'signup', required:'true',
                                          
                                           "content":{
                                                'application/json':{
                                               
                                            "schemas":{
                                                 "type":"object",
                                                
                                                 "properties":{
                                                   email:{"type":"string"},
                                                   password:{"type":"string"},
                                                   name:{"type":"string",}
                                                           },
                                                     },
                                                 },
                                             },
                
                                        },
                                        responses:{
                                        500:{description:'internal server error'},
                                        200:{description:'success'},
                                        }
                                      }
                                   },
     //for user login                              
                         '/login':{

                                post:{
                                  summary:"get your details",
                                  produces:["application/json"],
                                  consumes: ["application/json"],

                                  requestBody: {
                                      description:'login',required:"true",
                                      "content":{
                                         
                                        'application/json':{
                                          "schemas":{
                                            "type":"object",
                                           
                                            "properties":{
                                              'email':{"type":"string"},
                                              "password":{"type":"string"},
                                                            },
                                                      },
                                                  },
                                             },

                                        },
                                        responses:{
                                          500:{description:'internal server error'},
                                          200:{description:'success'},
                                          }

                                      }
                                   },
     //for adding products to cart                              
                         "/cart":{
                                post:{
                                  summary:"adds user's product to cart",
                                  produces:["application/json"],
                                  consumes: ["application/json"],
                                  requestBody: {
                                      description:'add to cart',required:"true",
                                      "content":{
                                         
                                        'application/json':{
                                          "schemas":{
                                            "type":"object",
                                           
                                            "properties":{
                                                 "productId":{"type":"string"},
                                                 "userId":{"type":"string"},
                                                 "restroId":{"type":"string"},
                                                 "productName":{"type":"string"},
                                                 "productQuantity":{"type":"string"},
                                                 "productPrice":{"type":"string"},
                                                 "productImage":{"type":"string"},                                              

                                                            },
                                                      },
                                                  },
                                             },

                                        },
                                        responses:{
                                          500:{description:'internal server error'},
                                          200:{description:'success'},
                                          }

                                      }

                              },
                         '/cart/:userId':{
                                 get:{
                            summary:"Shows user's added cart products",
                            produces:["application/json"],
                            consumes: ["application/json"],
                            parameters: [
                              {
                                in: "path",
                                name: "userId",
                                description: "User ID",
                                required: true,
                                schema: {
                                  "type": "string",
                                },
                              },
                            ],
                            responses:{
                                 500:{description:'internal server error'},
                                 200:{description:'success'},
                                 }
                              }
                         }, 
   //for deleting products of user's cart                      
                         '/delete':{
                          
                            put: {
                              summary: "removes the product from user's cart",
                              produces: ["application/json"],
                              consumes: ["application/json"],
                              requestBody: {
                                description: "removes the product from user's cart",
                                required: true,
                                content: {
                                  'application/json': {
                                    schema: {
                                      type: "object",
                                      properties: {
                                        productId: { "type": "string" },
                                        userId: { "type": "string" },
                                       
                                      },
                                    },
                                  },
                                },
                              },
                              responses: {
                                500: { description: 'Internal server error' },
                                200: { description: 'Success' },
                              },
                            
                          }
                          

                         } ,
    //for placing user order                     
                         '/orders':{
                          post:{
                            summary:"places user's order",
                            produces:["application/json"],
                            consumes: ["application/json"],
                          
                            requestBody: {
                                  description: "places user's order",
                                  required: true,
                                  content: {
                                    'application/json': {
                                      schema: {
                                        type: "object",
                                        properties: {
                                          userId: { "type": "string" },
                                          total: { "type": "string" },
                                          orderId: { "type": "string" },
                                          allProducts: { "type": "array" },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            
                                  responses:{
                                    500:{description:'internal server error'},
                                    200:{description:'success'},
                                    }

                                },
    //for getting user's past order                            
                         '/getOrder/:userId':{
                                  get:{
                                    summary:"Gets user's ordrs",
                                    produces:["application/json"],
                                    consumes: ["application/json"],
                                    parameters: [
                                      {
                                        in: "path",
                                        name: "userId",
                                        description: "User ID",
                                        required: true,
                                        schema: {
                                          type: "string",
                                        },
                                      },
                                    ],
                                          responses:{
                                            500:{description:'internal server error'},
                                            200:{description:'success'},
                                            }
        
                                        }
        
        
                                 },
   //for clearing cart                              
                         '/clearCart/:userId' :{
                          put: {
                            summary: "removes the all the products from user's cart",
                            produces: ["application/json"],
                            consumes: ["application/json"],
                            parameters:[
                              {
                                "in":'path',
                                "name":'User Id',
                                "description":'User Id',
                                required:'true',
                                "type": "string"
                                
                              }
                              

                            ],
                            responses: {
                              500: { description: 'Internal server error' },
                              200: { description: 'Success' },
                            },
                          
                        }

                         },
   //end of user's endpoints

   //restaurant's endpoints starts here

             //for adding restaurant
                      "/addrest":{
                        post:{
                                  
                                  
                          summary:"Creates restaurant's account",
                          produces:["application/json"],
                          consumes: ["application/json"],
                                 requestBody:{
                                   description:'restaurant signup', required:'true',
                                  
                                   "content":{
                                        'application/json':{
                                       
                                    "schemas":{
                                         "type":"object",
                                        
                                         "properties":{
                                           "name":{"type":"string"},
                                           "email":{"type":"string"},
                                           "password":{"type":"string"},
                                           "landmark":{"type":"string"},
                                           "image":{"type":"string"},
                                           "address":{"type":"string"},
                                           "categories":{"type":"string"},
                                           "origin":{"type":"string"},
                                                   },
                                             },
                                         },
                                     },
        
                                },
                                responses:{
                                500:{description:'internal server error'},
                                200:{description:'success'},
                                }
                              }

                      },
             //for restaurant login         
                      "/loginrestaurant":{
                        post:{
                                  
                                  
                          summary:"restaurant login",
                          produces:["application/json"],
                          consumes: ["application/json"],
                                 requestBody:{
                                   description:'login', required:'true',
                                  
                                   "content":{
                                        'application/json':{
                                       
                                    "schemas":{
                                         "type":"object",
                                        
                                         "properties":{
                                           'email':{"type":"string"},
                                           "password":{"type":"string"},
                                                   },
                                             },
                                         },
                                     },
        
                                },
                                responses:{
                                500:{description:'internal server error'},
                                200:{description:'success'},
                                }
                              }

                      },
            //for adding products to restaurant database
                      "/upload/addproduct/:userId":{
                        post:{
                          summary:"adds pructs to restaurant's database",
                          produces:["application/json"],
                          consumes: ["application/json"],
                          parameters:[{
                            "name":"restaurant Id",
                            'in':'path',
                            'description':'restaurant id',
                            required:'true',
                            "type":'strings',

                          }],
                                 requestBody:{
                                   description:"adds restaurant's products",
                                   required:'true',
                                  
                                   "content":{
                                        'application/json':{
                                       
                                    "schemas":{
                                         "type":"object",
                                        
                                         "properties":{
                                        
                                           "name":{"type":"string"},
                                           "price":{"type":"string"},
                                           "image":{"type":"string"},
                                           "description":{"type":"string"},
                                           "quantity":{"type":"string"},
                                                   },
                                             },
                                         },
                                     },
        
                                },
                                responses:{
                                500:{description:'internal server error'},
                                200:{description:'success'},
                                }
                              }


                      },
            //for showing all the products of a restaurant          
                     "/ShowAll/:id":{
                      get:{
                                  
                                  
                        summary:"Get's all the products of the particular",
                        produces:["application/json"],
                        consumes: ["application/json"],
                        parameters:[{
                              "name":"restaurant Id",
                              'in':'path',
                              'description':'restaurant id',
                              required:'true',
                              "type":'strings',

                        }],
                              responses:{
                              500:{description:'internal server error'},
                              200:{description:'success'},
                              }
                            }
                     } ,
            //for deleting a particular product from restaurants database         
                     "/deleteProduct/:productId":{
                      put: {
                        summary: "removes the product from restaurant's database",
                        produces: ["application/json"],
                        consumes: ["application/json"],
                        parameters:[{
                          "name":"Product Id",
                          'in':'path',
                          'description':'product id',
                          required:'true',
                          "type":'strings',

                    }],
                        requestBody: {
                          description: "removes the product from restaurant's database",
                          required: true,
                          content: {
                            'application/json': {
                              schema: {
                                type: "object",
                                properties: {
                                  id: { "type": "string" },
                                 
                                },
                              },
                            },
                          },
                        },
                        responses: {
                          500: { description: 'Internal server error' },
                          200: { description: 'Success' },
                        },
                      
                    }
                     },
            //for getting the details of the product to be edited         
                     "/editproduct/:productId/:id":{
                      get:{           
                        summary:"Get's all the products of the particular",
                        produces:["application/json"],
                        consumes: ["application/json"],
                        parameters:[{
                              "name":"restaurant Id",
                              'in':'path',
                              'description':'restaurant id',
                              required:'true',
                              "type":'strings',

                        },{
                          "name":"product Id",
                              'in':'path',
                              'description':'product id',
                              required:'true',
                              "type":'strings',
                        }],
                              responses:{
                              500:{description:'internal server error'},
                              200:{description:'success'},
                              }
                            }
                     },
            //for updatiing the product details        
                     "/edit/:id/:productId":{
                      post:{           
                        summary:"upadting the products of the particular restaurant",
                        produces:["application/json"],
                        consumes: ["application/json"],
                        parameters:[{
                              "name":"restaurant Id",
                              'in':'path',
                              'description':'restaurant id',
                              required:'true',
                              "type":'strings',

                        },{
                          "name":"product Id",
                              'in':'path',
                              'description':'product id',
                              required:'true',
                              "type":'strings',
                        }],
                              responses:{
                              500:{description:'internal server error'},
                              200:{description:'success'},
                              }
                            }

                     },
            //for getting orders on the restaurant's side         
                     "/getrestOrder/:restId":{
                      get:{
                        summary:"Gets user's ordrs",
                        produces:["application/json"],
                        consumes: ["application/json"],
                        parameters: [
                          {
                            in: "path",
                            name: "restaurant Id",
                            description: "restaurant ID",
                            required: true,
                            schema: {
                              type: "string",
                            },
                          },
                        ],
                              responses:{
                                500:{description:'internal server error'},
                                200:{description:'success'},
                                }

                            }
                     }
                     }                       
               },
               apis: ['./index.js']   
              }
                            
                   