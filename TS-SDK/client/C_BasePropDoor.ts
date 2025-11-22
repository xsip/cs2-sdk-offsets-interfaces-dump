// generated - do not edit!

import {client_C_DynamicProp} from './C_DynamicProp';
// Class size: 0x1460
// BaseClass: : public CS2::client::C_DynamicProp
export const client_C_BasePropDoor  = {
	...client_C_DynamicProp,
	m_eDoorState: 5168n, // client::DoorState_t  | Schema_DeclaredEnum | Size: 0x4
	m_modelChanged: 5172n, // bool m_modelChanged; |  0x1434 | Schema_Builtin | Size: 0x1
	m_bLocked: 5173n, // bool m_bLocked; |  0x1435 | Schema_Builtin | Size: 0x1
	m_bNoNPCs: 5174n, // bool m_bNoNPCs; |  0x1436 | Schema_Builtin | Size: 0x1
	m_closedPosition: 5176n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_closedAngles: 5188n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_hMaster: 5200n, // GlobalTypes::CHandle<client::C_BasePropDoor>  | Schema_Atomic | Size: 0x4
	m_vWhereToSetLightingOrigin: 5204n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
}
