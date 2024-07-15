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
        it_name = (request.json.get('name'))
        it_price = (request.json.get('price'))
        it_codebarre = (request.json.get('codebarre'))
        it_uid = str(uuid.uuid4())
        
        new_item = Item()
        new_item.it_name = it_name
        new_item.it_price = it_price
        new_item.it_codebarre = it_codebarre
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
                    'name': item.ar_name,
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
                'codebarre': readSingleItem.it_codebarre,
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
            updateitem.it_codebarre = request.json.get('codebarre', updateitem.it_codebarre)
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