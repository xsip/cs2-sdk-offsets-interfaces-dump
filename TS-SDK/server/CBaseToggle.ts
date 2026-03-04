// generated - do not edit!

import {server_CBaseModelEntity} from './CBaseModelEntity';
// Class size: 0x7B0
// BaseClass: : public CS2::server::CBaseModelEntity
export const server_CBaseToggle  = {
	...server_CBaseModelEntity,
	m_toggle_state: 1840n, // server::TOGGLE_STATE  | Schema_DeclaredEnum | Size: 0x4
	m_flMoveDistance: 1844n, // float32 m_flMoveDistance; |  0x734 | Schema_Builtin | Size: 0x4
	m_flWait: 1848n, // float32 m_flWait; |  0x738 | Schema_Builtin | Size: 0x4
	m_flLip: 1852n, // float32 m_flLip; |  0x73c | Schema_Builtin | Size: 0x4
	m_bAlwaysFireBlockedOutputs: 1856n, // bool m_bAlwaysFireBlockedOutputs; |  0x740 | Schema_Builtin | Size: 0x1
	m_vecPosition1: 1860n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecPosition2: 1872n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecMoveAng: 1884n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vecAngle1: 1896n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vecAngle2: 1908n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_flHeight: 1920n, // float32 m_flHeight; |  0x780 | Schema_Builtin | Size: 0x4
	m_hActivator: 1924n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_vecFinalDest: 1928n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecFinalAngle: 1940n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_movementType: 1952n, // int32_t m_movementType; |  0x7a0 | Schema_Builtin | Size: 0x4
	m_sMaster: 1960n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
}
