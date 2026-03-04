// generated - do not edit!

import {server_CBaseModelEntity} from './CBaseModelEntity';
// Class size: 0xA20
// BaseClass: : public CS2::server::CBaseModelEntity
export const server_CBaseAnimGraph  = {
	...server_CBaseModelEntity,
	m_graphControllerManager: 1840n, // client::CAnimGraphControllerManager  | Schema_DeclaredClass | Size: 0xb0
	m_pMainGraphController: 2016n, // client::CAnimGraphControllerBase**  | Schema_Ptr | Size: 0x8
	m_bInitiallyPopulateInterpHistory: 2024n, // bool m_bInitiallyPopulateInterpHistory; |  0x7e8 | Schema_Builtin | Size: 0x1
	m_pChoreoServices: 2032n, // client::IChoreoServices**  | Schema_Ptr | Size: 0x8
	m_bAnimGraphUpdateEnabled: 2040n, // bool m_bAnimGraphUpdateEnabled; |  0x7f8 | Schema_Builtin | Size: 0x1
	m_flMaxSlopeDistance: 2044n, // float32 m_flMaxSlopeDistance; |  0x7fc | Schema_Builtin | Size: 0x4
	m_vLastSlopeCheckPos: 2048n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_nAnimGraphUpdateId: 2060n, // uint32_t m_nAnimGraphUpdateId; |  0x80c | Schema_Builtin | Size: 0x4
	m_bAnimationUpdateScheduled: 2064n, // bool m_bAnimationUpdateScheduled; |  0x810 | Schema_Builtin | Size: 0x1
	m_vecForce: 2068n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nForceBone: 2080n, // int32_t m_nForceBone; |  0x820 | Schema_Builtin | Size: 0x4
	m_RagdollPose: 2104n, // server::PhysicsRagdollPose_t  | Schema_DeclaredClass | Size: 0x28
	m_bRagdollEnabled: 2144n, // bool m_bRagdollEnabled; |  0x860 | Schema_Builtin | Size: 0x1
	m_bRagdollClientSide: 2145n, // bool m_bRagdollClientSide; |  0x861 | Schema_Builtin | Size: 0x1
	m_xParentedRagdollRootInEntitySpace: 2160n, // GlobalTypes::CTransform  | Schema_Atomic | Size: 0x20
}
