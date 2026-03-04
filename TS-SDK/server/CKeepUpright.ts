// generated - do not edit!

import {server_CPointEntity} from './CPointEntity';
// Class size: 0x4E8
// BaseClass: : public CS2::server::CPointEntity
export const server_CKeepUpright  = {
	...server_CPointEntity,
	m_worldGoalAxis: 1200n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_localTestAxis: 1212n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nameAttach: 1232n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_attachedObject: 1240n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_angularLimit: 1244n, // float32 m_angularLimit; |  0x4dc | Schema_Builtin | Size: 0x4
	m_bActive: 1248n, // bool m_bActive; |  0x4e0 | Schema_Builtin | Size: 0x1
	m_bDampAllRotation: 1249n, // bool m_bDampAllRotation; |  0x4e1 | Schema_Builtin | Size: 0x1
}
