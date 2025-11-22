// generated - do not edit!

import {server_CBaseModelEntity} from './CBaseModelEntity';
// Class size: 0x858
// BaseClass: : public CS2::server::CBaseModelEntity
export const server_CBaseToggle  = {
	...server_CBaseModelEntity,
	m_toggle_state: 2008n, // server::TOGGLE_STATE  | Schema_DeclaredEnum | Size: 0x4
	m_flMoveDistance: 2012n, // float32 m_flMoveDistance; |  0x7dc | Schema_Builtin | Size: 0x4
	m_flWait: 2016n, // float32 m_flWait; |  0x7e0 | Schema_Builtin | Size: 0x4
	m_flLip: 2020n, // float32 m_flLip; |  0x7e4 | Schema_Builtin | Size: 0x4
	m_bAlwaysFireBlockedOutputs: 2024n, // bool m_bAlwaysFireBlockedOutputs; |  0x7e8 | Schema_Builtin | Size: 0x1
	m_vecPosition1: 2028n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecPosition2: 2040n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecMoveAng: 2052n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vecAngle1: 2064n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vecAngle2: 2076n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_flHeight: 2088n, // float32 m_flHeight; |  0x828 | Schema_Builtin | Size: 0x4
	m_hActivator: 2092n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_vecFinalDest: 2096n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecFinalAngle: 2108n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_movementType: 2120n, // int32_t m_movementType; |  0x848 | Schema_Builtin | Size: 0x4
	m_sMaster: 2128n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
}
