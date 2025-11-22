// generated - do not edit!

import {animgraphlib_CUnaryUpdateNode} from './CUnaryUpdateNode';
// Class size: 0xC0
// BaseClass: : public CS2::animgraphlib::CUnaryUpdateNode
export const animgraphlib_COrientationWarpUpdateNode  = {
	...animgraphlib_CUnaryUpdateNode,
	m_eMode: 116n, // animgraphlib::OrientationWarpMode_t  | Schema_DeclaredEnum | Size: 0x4
	m_hTargetParam: 120n, // animgraphlib::CAnimParamHandle  | Schema_DeclaredClass | Size: 0x2
	m_hTargetPositionParam: 122n, // animgraphlib::CAnimParamHandle  | Schema_DeclaredClass | Size: 0x2
	m_hFallbackTargetPositionParam: 124n, // animgraphlib::CAnimParamHandle  | Schema_DeclaredClass | Size: 0x2
	m_eTargetOffsetMode: 128n, // animgraphlib::OrientationWarpTargetOffsetMode_t  | Schema_DeclaredEnum | Size: 0x4
	m_flTargetOffset: 132n, // float32 m_flTargetOffset; |  0x84 | Schema_Builtin | Size: 0x4
	m_hTargetOffsetParam: 136n, // animgraphlib::CAnimParamHandle  | Schema_DeclaredClass | Size: 0x2
	m_damping: 144n, // animgraphlib::CAnimInputDamping  | Schema_DeclaredClass | Size: 0x18
	m_eRootMotionSource: 168n, // animgraphlib::OrientationWarpRootMotionSource_t  | Schema_DeclaredEnum | Size: 0x4
	m_flMaxRootMotionScale: 172n, // float32 m_flMaxRootMotionScale; |  0xac | Schema_Builtin | Size: 0x4
	m_bEnablePreferredRotationDirection: 176n, // bool m_bEnablePreferredRotationDirection; |  0xb0 | Schema_Builtin | Size: 0x1
	m_ePreferredRotationDirection: 180n, // animgraphlib::AnimValueSource  | Schema_DeclaredEnum | Size: 0x4
	m_flPreferredRotationThreshold: 184n, // float32 m_flPreferredRotationThreshold; |  0xb8 | Schema_Builtin | Size: 0x4
}
