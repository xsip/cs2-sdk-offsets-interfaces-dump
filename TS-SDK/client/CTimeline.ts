// generated - do not edit!

import {client_IntervalTimer} from './IntervalTimer';
// Class size: 0x228
// BaseClass: : public CS2::client::IntervalTimer
export const client_CTimeline  = {
	...client_IntervalTimer,
	m_flValues: 16n, // float32 m_flValues[64]; |  0x10 | Schema_FixedArray | Size: 0x100
	m_nValueCounts: 272n, // int32_t m_nValueCounts[64]; |  0x110 | Schema_FixedArray | Size: 0x100
	m_nBucketCount: 528n, // int32_t m_nBucketCount; |  0x210 | Schema_Builtin | Size: 0x4
	m_flInterval: 532n, // float32 m_flInterval; |  0x214 | Schema_Builtin | Size: 0x4
	m_flFinalValue: 536n, // float32 m_flFinalValue; |  0x218 | Schema_Builtin | Size: 0x4
	m_nCompressionType: 540n, // client::TimelineCompression_t  | Schema_DeclaredEnum | Size: 0x4
	m_bStopped: 544n, // bool m_bStopped; |  0x220 | Schema_Builtin | Size: 0x1
}
