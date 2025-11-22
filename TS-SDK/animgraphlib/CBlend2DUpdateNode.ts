// generated - do not edit!

import {animgraphlib_CAnimUpdateNodeBase} from './CAnimUpdateNodeBase';
// Class size: 0xF8
// BaseClass: : public CS2::animgraphlib::CAnimUpdateNodeBase
export const animgraphlib_CBlend2DUpdateNode  = {
	...animgraphlib_CAnimUpdateNodeBase,
	m_items: 96n, // GlobalTypes::CUtlVector<animgraphlib::BlendItem_t>  | Schema_Atomic | Size: 0x18
	m_tags: 120n, // GlobalTypes::CUtlVector<animgraphlib::TagSpan_t>  | Schema_Atomic | Size: 0x18
	m_paramSpans: 144n, // animgraphlib::CParamSpanUpdater  | Schema_DeclaredClass | Size: 0x18
	m_nodeItemIndices: 168n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_damping: 192n, // animgraphlib::CAnimInputDamping  | Schema_DeclaredClass | Size: 0x18
	m_blendSourceX: 216n, // animgraphlib::AnimValueSource  | Schema_DeclaredEnum | Size: 0x4
	m_paramX: 220n, // animgraphlib::CAnimParamHandle  | Schema_DeclaredClass | Size: 0x2
	m_blendSourceY: 224n, // animgraphlib::AnimValueSource  | Schema_DeclaredEnum | Size: 0x4
	m_paramY: 228n, // animgraphlib::CAnimParamHandle  | Schema_DeclaredClass | Size: 0x2
	m_eBlendMode: 232n, // animgraphlib::Blend2DMode  | Schema_DeclaredEnum | Size: 0x4
	m_playbackSpeed: 236n, // float32 m_playbackSpeed; |  0xec | Schema_Builtin | Size: 0x4
	m_bLoop: 240n, // bool m_bLoop; |  0xf0 | Schema_Builtin | Size: 0x1
	m_bLockBlendOnReset: 241n, // bool m_bLockBlendOnReset; |  0xf1 | Schema_Builtin | Size: 0x1
	m_bLockWhenWaning: 242n, // bool m_bLockWhenWaning; |  0xf2 | Schema_Builtin | Size: 0x1
	m_bAnimEventsAndTagsOnMostWeightedOnly: 243n, // bool m_bAnimEventsAndTagsOnMostWeightedOnly; |  0xf3 | Schema_Builtin | Size: 0x1
}
