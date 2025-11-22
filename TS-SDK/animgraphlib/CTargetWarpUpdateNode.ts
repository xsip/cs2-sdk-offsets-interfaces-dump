// generated - do not edit!

import {animgraphlib_CUnaryUpdateNode} from './CUnaryUpdateNode';
// Class size: 0x98
// BaseClass: : public CS2::animgraphlib::CUnaryUpdateNode
export const animgraphlib_CTargetWarpUpdateNode  = {
	...animgraphlib_CUnaryUpdateNode,
	m_eAngleMode: 116n, // animgraphlib::TargetWarpAngleMode_t  | Schema_DeclaredEnum | Size: 0x4
	m_hTargetPositionParameter: 120n, // animgraphlib::CAnimParamHandle  | Schema_DeclaredClass | Size: 0x2
	m_hTargetUpVectorParameter: 122n, // animgraphlib::CAnimParamHandle  | Schema_DeclaredClass | Size: 0x2
	m_hTargetFacePositionParameter: 124n, // animgraphlib::CAnimParamHandle  | Schema_DeclaredClass | Size: 0x2
	m_hMoveHeadingParameter: 126n, // animgraphlib::CAnimParamHandle  | Schema_DeclaredClass | Size: 0x2
	m_hDesiredMoveHeadingParameter: 128n, // animgraphlib::CAnimParamHandle  | Schema_DeclaredClass | Size: 0x2
	m_eCorrectionMethod: 132n, // animgraphlib::TargetWarpCorrectionMethod  | Schema_DeclaredEnum | Size: 0x4
	m_eTargetWarpTimingMethod: 136n, // animgraphlib::TargetWarpTimingMethod  | Schema_DeclaredEnum | Size: 0x4
	m_bTargetFacePositionIsWorldSpace: 140n, // bool m_bTargetFacePositionIsWorldSpace; |  0x8c | Schema_Builtin | Size: 0x1
	m_bTargetPositionIsWorldSpace: 141n, // bool m_bTargetPositionIsWorldSpace; |  0x8d | Schema_Builtin | Size: 0x1
	m_bOnlyWarpWhenTagIsFound: 142n, // bool m_bOnlyWarpWhenTagIsFound; |  0x8e | Schema_Builtin | Size: 0x1
	m_bWarpOrientationDuringTranslation: 143n, // bool m_bWarpOrientationDuringTranslation; |  0x8f | Schema_Builtin | Size: 0x1
	m_bWarpAroundCenter: 144n, // bool m_bWarpAroundCenter; |  0x90 | Schema_Builtin | Size: 0x1
	m_flMaxAngle: 148n, // float32 m_flMaxAngle; |  0x94 | Schema_Builtin | Size: 0x4
}
