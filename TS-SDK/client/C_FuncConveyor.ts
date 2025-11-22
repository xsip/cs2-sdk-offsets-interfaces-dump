// generated - do not edit!

import {client_C_BaseModelEntity} from './C_BaseModelEntity';
// Class size: 0xEF8
// BaseClass: : public CS2::client::C_BaseModelEntity
export const client_C_FuncConveyor  = {
	...client_C_BaseModelEntity,
	m_vecMoveDirEntitySpace: 3768n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flTargetSpeed: 3780n, // float32 m_flTargetSpeed; |  0xec4 | Schema_Builtin | Size: 0x4
	m_nTransitionStartTick: 3784n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_nTransitionDurationTicks: 3788n, // int32_t m_nTransitionDurationTicks; |  0xecc | Schema_Builtin | Size: 0x4
	m_flTransitionStartSpeed: 3792n, // float32 m_flTransitionStartSpeed; |  0xed0 | Schema_Builtin | Size: 0x4
	m_hConveyorModels: 3800n, // client::C_NetworkUtlVectorBase<GlobalTypes::CHandle<client::C_BaseEntity>>  | Schema_Atomic | Size: 0x18
	m_flCurrentConveyorOffset: 3824n, // float32 m_flCurrentConveyorOffset; |  0xef0 | Schema_Builtin | Size: 0x4
	m_flCurrentConveyorSpeed: 3828n, // float32 m_flCurrentConveyorSpeed; |  0xef4 | Schema_Builtin | Size: 0x4
}
