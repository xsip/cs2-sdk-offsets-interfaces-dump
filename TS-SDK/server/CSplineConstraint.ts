// generated - do not edit!

import {server_CPhysConstraint} from './CPhysConstraint';
// Class size: 0x5B8
// BaseClass: : public CS2::server::CPhysConstraint
export const server_CSplineConstraint  = {
	...server_CPhysConstraint,
	m_vAnchorOffsetRestore: 1368n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_hSplineEntity: 1380n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_bEnableLateralConstraint: 1392n, // bool m_bEnableLateralConstraint; |  0x570 | Schema_Builtin | Size: 0x1
	m_bEnableVerticalConstraint: 1393n, // bool m_bEnableVerticalConstraint; |  0x571 | Schema_Builtin | Size: 0x1
	m_bEnableAngularConstraint: 1394n, // bool m_bEnableAngularConstraint; |  0x572 | Schema_Builtin | Size: 0x1
	m_bEnableLimit: 1395n, // bool m_bEnableLimit; |  0x573 | Schema_Builtin | Size: 0x1
	m_bFireEventsOnPath: 1396n, // bool m_bFireEventsOnPath; |  0x574 | Schema_Builtin | Size: 0x1
	m_flLinearFrequency: 1400n, // float32 m_flLinearFrequency; |  0x578 | Schema_Builtin | Size: 0x4
	m_flLinarDampingRatio: 1404n, // float32 m_flLinarDampingRatio; |  0x57c | Schema_Builtin | Size: 0x4
	m_flJointFriction: 1408n, // float32 m_flJointFriction; |  0x580 | Schema_Builtin | Size: 0x4
	m_flTransitionTime: 1412n, // float32 m_flTransitionTime; |  0x584 | Schema_Builtin | Size: 0x4
	m_vPreSolveAnchorPos: 1432n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_StartTransitionTime: 1444n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_vTangentSpaceAnchorAtTransitionStart: 1448n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
}
