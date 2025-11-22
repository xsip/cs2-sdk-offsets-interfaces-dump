// generated - do not edit!

import {server_CBaseModelEntity} from './CBaseModelEntity';
// Class size: 0x828
// BaseClass: : public CS2::server::CBaseModelEntity
export const server_CFuncConveyor  = {
	...server_CBaseModelEntity,
	m_szConveyorModels: 2008n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_flTransitionDurationSeconds: 2016n, // float32 m_flTransitionDurationSeconds; |  0x7e0 | Schema_Builtin | Size: 0x4
	m_angMoveEntitySpace: 2020n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_vecMoveDirEntitySpace: 2032n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flTargetSpeed: 2044n, // float32 m_flTargetSpeed; |  0x7fc | Schema_Builtin | Size: 0x4
	m_nTransitionStartTick: 2048n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_nTransitionDurationTicks: 2052n, // int32_t m_nTransitionDurationTicks; |  0x804 | Schema_Builtin | Size: 0x4
	m_flTransitionStartSpeed: 2056n, // float32 m_flTransitionStartSpeed; |  0x808 | Schema_Builtin | Size: 0x4
	m_hConveyorModels: 2064n, // server::CNetworkUtlVectorBase<GlobalTypes::CHandle<server::CBaseEntity>>  | Schema_Atomic | Size: 0x18
}
