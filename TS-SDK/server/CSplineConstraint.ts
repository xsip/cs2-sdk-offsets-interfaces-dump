// generated - do not edit!

import {server_CPhysConstraint} from './CPhysConstraint';
// Class size: 0x620
// BaseClass: : public CS2::server::CPhysConstraint
export const server_CSplineConstraint  = {
	...server_CPhysConstraint,
	m_vAnchorOffsetRestore: 1456n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_hSplineEntity: 1468n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_bEnableLateralConstraint: 1480n, // bool m_bEnableLateralConstraint; |  0x5c8 | Schema_Builtin | Size: 0x1
	m_bEnableVerticalConstraint: 1481n, // bool m_bEnableVerticalConstraint; |  0x5c9 | Schema_Builtin | Size: 0x1
	m_bEnableAngularConstraint: 1482n, // bool m_bEnableAngularConstraint; |  0x5ca | Schema_Builtin | Size: 0x1
	m_bEnableLimit: 1483n, // bool m_bEnableLimit; |  0x5cb | Schema_Builtin | Size: 0x1
	m_bFireEventsOnPath: 1484n, // bool m_bFireEventsOnPath; |  0x5cc | Schema_Builtin | Size: 0x1
	m_flLinearFrequency: 1488n, // float32 m_flLinearFrequency; |  0x5d0 | Schema_Builtin | Size: 0x4
	m_flLinarDampingRatio: 1492n, // float32 m_flLinarDampingRatio; |  0x5d4 | Schema_Builtin | Size: 0x4
	m_flJointFriction: 1496n, // float32 m_flJointFriction; |  0x5d8 | Schema_Builtin | Size: 0x4
	m_flTransitionTime: 1500n, // float32 m_flTransitionTime; |  0x5dc | Schema_Builtin | Size: 0x4
	m_vPreSolveAnchorPos: 1536n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_StartTransitionTime: 1548n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_vTangentSpaceAnchorAtTransitionStart: 1552n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
}
