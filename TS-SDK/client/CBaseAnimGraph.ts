// generated - do not edit!

import {client_C_BaseModelEntity} from './C_BaseModelEntity';
// Class size: 0x1158
// BaseClass: : public CS2::client::C_BaseModelEntity
export const client_CBaseAnimGraph  = {
	...client_C_BaseModelEntity,
	m_bInitiallyPopulateInterpHistory: 3888n, // bool m_bInitiallyPopulateInterpHistory; |  0xf30 | Schema_Builtin | Size: 0x1
	m_bSuppressAnimEventSounds: 3890n, // bool m_bSuppressAnimEventSounds; |  0xf32 | Schema_Builtin | Size: 0x1
	m_bAnimGraphUpdateEnabled: 3904n, // bool m_bAnimGraphUpdateEnabled; |  0xf40 | Schema_Builtin | Size: 0x1
	m_flMaxSlopeDistance: 3908n, // float32 m_flMaxSlopeDistance; |  0xf44 | Schema_Builtin | Size: 0x4
	m_vLastSlopeCheckPos: 3912n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_bAnimationUpdateScheduled: 3924n, // bool m_bAnimationUpdateScheduled; |  0xf54 | Schema_Builtin | Size: 0x1
	m_vecForce: 3928n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nForceBone: 3940n, // int32_t m_nForceBone; |  0xf64 | Schema_Builtin | Size: 0x4
	m_pClientsideRagdoll: 3944n, // client::CBaseAnimGraph**  | Schema_Ptr | Size: 0x8
	m_bBuiltRagdoll: 3952n, // bool m_bBuiltRagdoll; |  0xf70 | Schema_Builtin | Size: 0x1
	m_RagdollPose: 3976n, // client::PhysicsRagdollPose_t  | Schema_DeclaredClass | Size: 0x48
	m_bRagdollEnabled: 4048n, // bool m_bRagdollEnabled; |  0xfd0 | Schema_Builtin | Size: 0x1
	m_bRagdollClientSide: 4049n, // bool m_bRagdollClientSide; |  0xfd1 | Schema_Builtin | Size: 0x1
	m_bHasAnimatedMaterialAttributes: 4064n, // bool m_bHasAnimatedMaterialAttributes; |  0xfe0 | Schema_Builtin | Size: 0x1
}
