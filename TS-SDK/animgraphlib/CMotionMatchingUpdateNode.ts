// generated - do not edit!

import {animgraphlib_CLeafUpdateNode} from './CLeafUpdateNode';
// Class size: 0x148
// BaseClass: : public CS2::animgraphlib::CLeafUpdateNode
export const animgraphlib_CMotionMatchingUpdateNode  = {
	...animgraphlib_CLeafUpdateNode,
	m_dataSet: 88n, // animgraphlib::CMotionDataSet  | Schema_DeclaredClass | Size: 0x20
	m_metrics: 120n, // GlobalTypes::CUtlVector<GlobalTypes::CSmartPtr<animgraphlib::CMotionMetricEvaluator>>  | Schema_Atomic | Size: 0x18
	m_weights: 144n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_bSearchEveryTick: 224n, // bool m_bSearchEveryTick; |  0xe0 | Schema_Builtin | Size: 0x1
	m_flSearchInterval: 228n, // float32 m_flSearchInterval; |  0xe4 | Schema_Builtin | Size: 0x4
	m_bSearchWhenClipEnds: 232n, // bool m_bSearchWhenClipEnds; |  0xe8 | Schema_Builtin | Size: 0x1
	m_bSearchWhenGoalChanges: 233n, // bool m_bSearchWhenGoalChanges; |  0xe9 | Schema_Builtin | Size: 0x1
	m_blendCurve: 236n, // animgraphlib::CBlendCurve  | Schema_DeclaredClass | Size: 0x8
	m_flSampleRate: 244n, // float32 m_flSampleRate; |  0xf4 | Schema_Builtin | Size: 0x4
	m_flBlendTime: 248n, // float32 m_flBlendTime; |  0xf8 | Schema_Builtin | Size: 0x4
	m_bLockClipWhenWaning: 252n, // bool m_bLockClipWhenWaning; |  0xfc | Schema_Builtin | Size: 0x1
	m_flSelectionThreshold: 256n, // float32 m_flSelectionThreshold; |  0x100 | Schema_Builtin | Size: 0x4
	m_flReselectionTimeWindow: 260n, // float32 m_flReselectionTimeWindow; |  0x104 | Schema_Builtin | Size: 0x4
	m_bEnableRotationCorrection: 264n, // bool m_bEnableRotationCorrection; |  0x108 | Schema_Builtin | Size: 0x1
	m_bGoalAssist: 265n, // bool m_bGoalAssist; |  0x109 | Schema_Builtin | Size: 0x1
	m_flGoalAssistDistance: 268n, // float32 m_flGoalAssistDistance; |  0x10c | Schema_Builtin | Size: 0x4
	m_flGoalAssistTolerance: 272n, // float32 m_flGoalAssistTolerance; |  0x110 | Schema_Builtin | Size: 0x4
	m_distanceScale_Damping: 280n, // animgraphlib::CAnimInputDamping  | Schema_DeclaredClass | Size: 0x18
	m_flDistanceScale_OuterRadius: 304n, // float32 m_flDistanceScale_OuterRadius; |  0x130 | Schema_Builtin | Size: 0x4
	m_flDistanceScale_InnerRadius: 308n, // float32 m_flDistanceScale_InnerRadius; |  0x134 | Schema_Builtin | Size: 0x4
	m_flDistanceScale_MaxScale: 312n, // float32 m_flDistanceScale_MaxScale; |  0x138 | Schema_Builtin | Size: 0x4
	m_flDistanceScale_MinScale: 316n, // float32 m_flDistanceScale_MinScale; |  0x13c | Schema_Builtin | Size: 0x4
	m_bEnableDistanceScaling: 320n, // bool m_bEnableDistanceScaling; |  0x140 | Schema_Builtin | Size: 0x1
}
