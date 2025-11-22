// generated - do not edit!

import {server_CPathKeyFrame} from './CPathKeyFrame';
// Class size: 0x590
// BaseClass: : public CS2::server::CPathKeyFrame
export const server_CBaseMoveBehavior  = {
	...server_CPathKeyFrame,
	m_iPositionInterpolator: 1360n, // int32_t m_iPositionInterpolator; |  0x550 | Schema_Builtin | Size: 0x4
	m_iRotationInterpolator: 1364n, // int32_t m_iRotationInterpolator; |  0x554 | Schema_Builtin | Size: 0x4
	m_flAnimStartTime: 1368n, // float32 m_flAnimStartTime; |  0x558 | Schema_Builtin | Size: 0x4
	m_flAnimEndTime: 1372n, // float32 m_flAnimEndTime; |  0x55c | Schema_Builtin | Size: 0x4
	m_flAverageSpeedAcrossFrame: 1376n, // float32 m_flAverageSpeedAcrossFrame; |  0x560 | Schema_Builtin | Size: 0x4
	m_pCurrentKeyFrame: 1384n, // server::CPathKeyFrame**  | Schema_Ptr | Size: 0x8
	m_pTargetKeyFrame: 1392n, // server::CPathKeyFrame**  | Schema_Ptr | Size: 0x8
	m_pPreKeyFrame: 1400n, // server::CPathKeyFrame**  | Schema_Ptr | Size: 0x8
	m_pPostKeyFrame: 1408n, // server::CPathKeyFrame**  | Schema_Ptr | Size: 0x8
	m_flTimeIntoFrame: 1416n, // float32 m_flTimeIntoFrame; |  0x588 | Schema_Builtin | Size: 0x4
	m_iDirection: 1420n, // int32_t m_iDirection; |  0x58c | Schema_Builtin | Size: 0x4
}
