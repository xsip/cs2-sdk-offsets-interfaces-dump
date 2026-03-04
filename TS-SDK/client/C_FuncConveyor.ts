// generated - do not edit!

import {client_C_BaseModelEntity} from './C_BaseModelEntity';
// Class size: 0xED0
// BaseClass: : public CS2::client::C_BaseModelEntity
export const client_C_FuncConveyor  = {
	...client_C_BaseModelEntity,
	m_vecMoveDirEntitySpace: 3728n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flTargetSpeed: 3740n, // float32 m_flTargetSpeed; |  0xe9c | Schema_Builtin | Size: 0x4
	m_nTransitionStartTick: 3744n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_nTransitionDurationTicks: 3748n, // int32_t m_nTransitionDurationTicks; |  0xea4 | Schema_Builtin | Size: 0x4
	m_flTransitionStartSpeed: 3752n, // float32 m_flTransitionStartSpeed; |  0xea8 | Schema_Builtin | Size: 0x4
	m_hConveyorModels: 3760n, // client::C_NetworkUtlVectorBase<GlobalTypes::CHandle<client::C_BaseEntity>>  | Schema_Atomic | Size: 0x18
	m_flCurrentConveyorOffset: 3784n, // float32 m_flCurrentConveyorOffset; |  0xec8 | Schema_Builtin | Size: 0x4
	m_flCurrentConveyorSpeed: 3788n, // float32 m_flCurrentConveyorSpeed; |  0xecc | Schema_Builtin | Size: 0x4
}
