// generated - do not edit!

import {server_CPathKeyFrame} from './CPathKeyFrame';
// Class size: 0x540
// BaseClass: : public CS2::server::CPathKeyFrame
export const server_CBaseMoveBehavior  = {
	...server_CPathKeyFrame,
	m_iPositionInterpolator: 1280n, // int32_t m_iPositionInterpolator; |  0x500 | Schema_Builtin | Size: 0x4
	m_iRotationInterpolator: 1284n, // int32_t m_iRotationInterpolator; |  0x504 | Schema_Builtin | Size: 0x4
	m_flAnimStartTime: 1288n, // float32 m_flAnimStartTime; |  0x508 | Schema_Builtin | Size: 0x4
	m_flAnimEndTime: 1292n, // float32 m_flAnimEndTime; |  0x50c | Schema_Builtin | Size: 0x4
	m_flAverageSpeedAcrossFrame: 1296n, // float32 m_flAverageSpeedAcrossFrame; |  0x510 | Schema_Builtin | Size: 0x4
	m_pCurrentKeyFrame: 1304n, // server::CPathKeyFrame**  | Schema_Ptr | Size: 0x8
	m_pTargetKeyFrame: 1312n, // server::CPathKeyFrame**  | Schema_Ptr | Size: 0x8
	m_pPreKeyFrame: 1320n, // server::CPathKeyFrame**  | Schema_Ptr | Size: 0x8
	m_pPostKeyFrame: 1328n, // server::CPathKeyFrame**  | Schema_Ptr | Size: 0x8
	m_flTimeIntoFrame: 1336n, // float32 m_flTimeIntoFrame; |  0x538 | Schema_Builtin | Size: 0x4
	m_iDirection: 1340n, // int32_t m_iDirection; |  0x53c | Schema_Builtin | Size: 0x4
}
