from flask_restful import Resource
import json
from helpers.user import *
from flask import request


class UserApi(Resource):
    def post(self, route):
        if route == "create":
            return CreateUser()
        if route == "login":
            return LoginUser()
    
    # def get(self, route):
    #     if route == "readall":
    #         return ReadAllAdmin()
    #     if route == "readsingle":
    #         return ReadSingleAdmin()
            
    
    # def delete(self, route):
    #      if route == "delete":
    #         return DeleteAdmin()
         
    # def patch(self, route):
    #     if route == "update":
    #         return UpdateAdmin()
        