// generated - do not edit!

import {animgraphlib_CAnimUpdateNodeBase} from './CAnimUpdateNodeBase';
// Class size: 0xA0
// BaseClass: : public CS2::animgraphlib::CAnimUpdateNodeBase
export const animgraphlib_CTargetSelectorUpdateNode  = {
	...animgraphlib_CAnimUpdateNodeBase,
	m_eAngleMode: 96n, // animgraphlib::TargetSelectorAngleMode_t  | Schema_DeclaredEnum | Size: 0x4
	m_children: 104n, // GlobalTypes::CUtlVector<animgraphlib::CAnimUpdateNodeRef>  | Schema_Atomic | Size: 0x18
	m_hTargetPosition: 132n, // animgraphlib::CAnimParamHandle  | Schema_DeclaredClass | Size: 0x2
	m_hTargetFacePositionParameter: 134n, // animgraphlib::CAnimParamHandle  | Schema_DeclaredClass | Size: 0x2
	m_hMoveHeadingParameter: 136n, // animgraphlib::CAnimParamHandle  | Schema_DeclaredClass | Size: 0x2
	m_hDesiredMoveHeadingParameter: 138n, // animgraphlib::CAnimParamHandle  | Schema_DeclaredClass | Size: 0x2
	m_bTargetPositionIsWorldSpace: 140n, // bool m_bTargetPositionIsWorldSpace; |  0x8c | Schema_Builtin | Size: 0x1
	m_bTargetFacePositionIsWorldSpace: 141n, // bool m_bTargetFacePositionIsWorldSpace; |  0x8d | Schema_Builtin | Size: 0x1
	m_bEnablePhaseMatching: 142n, // bool m_bEnablePhaseMatching; |  0x8e | Schema_Builtin | Size: 0x1
	m_flPhaseMatchingMaxRootMotionSkip: 144n, // float32 m_flPhaseMatchingMaxRootMotionSkip; |  0x90 | Schema_Builtin | Size: 0x4
}
