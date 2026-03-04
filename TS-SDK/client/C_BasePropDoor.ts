// generated - do not edit!

import {client_C_DynamicProp} from './C_DynamicProp';
// Class size: 0x13E0
// BaseClass: : public CS2::client::C_DynamicProp
export const client_C_BasePropDoor  = {
	...client_C_DynamicProp,
	m_eDoorState: 5040n, // client::DoorState_t  | Schema_DeclaredEnum | Size: 0x4
	m_modelChanged: 5044n, // bool m_modelChanged; |  0x13b4 | Schema_Builtin | Size: 0x1
	m_bLocked: 5045n, // bool m_bLocked; |  0x13b5 | Schema_Builtin | Size: 0x1
	m_bNoNPCs: 5046n, // bool m_bNoNPCs; |  0x13b6 | Schema_Builtin | Size: 0x1
	m_closedPosition: 5048n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_closedAngles: 5060n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_hMaster: 5072n, // GlobalTypes::CHandle<client::C_BasePropDoor>  | Schema_Atomic | Size: 0x4
	m_vWhereToSetLightingOrigin: 5076n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
}
