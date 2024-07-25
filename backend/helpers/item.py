from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
from datetime import timedelta
from flask import request, jsonify
import uuid
from config.db import db
from model.tt import *
import bcrypt, jwt
from werkzeug.security import check_password_hash

   
def SaveItem():
    reponse = {}

    try:
        it_name = (request.json.get('itemname'))
        it_price = (request.json.get('price'))
        it_description = (request.json.get('description'))
        it_brand = (request.json.get('brand'))
        it_barcode = (request.json.get('barcode'))
        it_stock = (request.json.get('stock'))
        it_lowstock = (request.json.get('lowstock'))
        it_uid = str(uuid.uuid4())
        
        new_item = Item()
        new_item.it_name = it_name
        new_item.it_price = it_price
        new_item.it_description = it_description
        new_item.it_brand = it_brand
        new_item.it_barcode = it_barcode
        new_item.it_stock = it_stock
        new_item.it_lowstock = it_lowstock
        new_item.it_uid = it_uid
        
        db.session.add(new_item)
        db.session.commit()

        # nouvel_hotel =(reponse)
        # liste_users.append(nouvel_hotel)

        reponse['status'] = 'Succes'

    except Exception as e:
        reponse['error_description'] = str(e)
        reponse['status'] = 'error'

    return reponse



def ReadAllItem():
    reponse = {}

    try:
        readAllItem = Item.query.all()

        if readAllItem:
            item_informations = []
            for item in readAllItem:
                item_infos = {
                    'it_uid': item.it_uid,
                    'name': item.it_name,
                    'price': item.it_price,
                }
                item_informations.append(item_infos)

            reponse['status'] = 'success'
            reponse ['users'] = item_informations
        else:
            reponse['status'] = 'erreur'
            reponse['motif'] = 'aucun'

    except Exception as e:
        reponse['error_description'] = str(e)
        reponse['status'] = 'error'

    return reponse


def ReadSingleItem():
    reponse = {}

    try:
        uid = request.json.get('it_uid')
        readSingleItem = Item.query.filter_by(it_uid = uid).first()

        if readSingleItem:
            item_infos = {
                'name': readSingleItem.it_name,
                'price': readSingleItem.it_price,
                'barcode': readSingleItem.it_barcode,
                'it_uid': readSingleItem.it_uid,
            }

            reponse['status'] = 'success'
            reponse['user'] = item_infos
        else:
            reponse['status'] = 'erreur'
            reponse['motif'] = 'aucun'

    except Exception as e:
        reponse['error_description'] = str(e)
        reponse['status'] = 'error'

    return reponse



def UpdateItem():
    reponse = {}
    try:
        uid = request.json.get('it_uid')
        updateitem = Item.query.filter_by(it_uid = uid).first()

        if updateitem:
            updateitem.it_name = request.json.get('name', updateitem.it_name)
            updateitem.it_price = request.json.get('price', updateitem.it_price)            
            updateitem.it_barcode = request.json.get('barcode', updateitem.it_barcode)
            updateitem.it_uid = request.json.get('it_uid', updateitem.it_uid)

            db.session.add(updateitem)
            db.session.commit()

            reponse['status'] = 'Succes'
        else:
            reponse['status'] = 'Item not found'

    except Exception as e:
        reponse['error_description'] = str(e)
        reponse['status'] = 'error'

    return reponse


def DeleteItem():
    reponse = {}

    try:
        uid = request.json.get('it_uid')
        deleteitem = Item.query.filter_by(it_uid=uid).first()

        if deleteitem:
            db.session.delete(deleteitem)
            db.session.commit()
            reponse['status'] = 'success'
        else:
            reponse['status'] = 'error'
            reponse['motif'] = 'Item not found'

    except Exception as e:
        reponse['error_description'] = str(e)
        reponse['status'] = 'error'

    return reponse


def SearchItem(code):
    reponse = {}

    try:
        readSingleItem = Item.query.filter_by(it_barcode=code).first()

        if readSingleItem:
            item_infos = {
                'name': readSingleItem.it_name,
                'price': readSingleItem.it_price,
                'barcode': readSingleItem.it_barcode,
                'it_uid': readSingleItem.it_uid,
            }
        reponse['status'] = 'Succes'
        reponse['item'] = item_infos

    except Exception as e:
        reponse['error_description'] = str(e)
        reponse['status'] = 'error'

    return reponse



def BuyForm():
    reponse = {}
    items = []

    try:
        code = request.json.get('barcode')
        if code:
            result = SearchItem(code)
            items.append(result['item'])

        formbuying = items
        bu_uid = str(uuid.uuid4())
        
        new_buyform = Formbuying()
        new_buyform.formbuying = formbuying
        new_buyform.bu_uid = bu_uid
        
        db.session.add(new_buyform)
        db.session.commit()

        # nouvel_hotel =(reponse)
        # liste_users.append(nouvel_hotel)

        reponse['status'] = 'Succes'

    except Exception as e:
        reponse['error_description'] = str(e)
        reponse['status'] = 'error'

    return reponse