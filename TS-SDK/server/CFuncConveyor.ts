// generated - do not edit!

import {server_CBaseModelEntity} from './CBaseModelEntity';
// Class size: 0x780
// BaseClass: : public CS2::server::CBaseModelEntity
export const server_CFuncConveyor  = {
	...server_CBaseModelEntity,
	m_szConveyorModels: 1840n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_flTransitionDurationSeconds: 1848n, // float32 m_flTransitionDurationSeconds; |  0x738 | Schema_Builtin | Size: 0x4
	m_angMoveEntitySpace: 1852n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vecMoveDirEntitySpace: 1864n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flTargetSpeed: 1876n, // float32 m_flTargetSpeed; |  0x754 | Schema_Builtin | Size: 0x4
	m_nTransitionStartTick: 1880n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_nTransitionDurationTicks: 1884n, // int32_t m_nTransitionDurationTicks; |  0x75c | Schema_Builtin | Size: 0x4
	m_flTransitionStartSpeed: 1888n, // float32 m_flTransitionStartSpeed; |  0x760 | Schema_Builtin | Size: 0x4
	m_hConveyorModels: 1896n, // server::CNetworkUtlVectorBase<GlobalTypes::CHandle<server::CBaseEntity>>  | Schema_Atomic | Size: 0x18
}
