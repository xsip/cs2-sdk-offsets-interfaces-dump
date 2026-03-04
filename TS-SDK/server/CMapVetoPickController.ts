// generated - do not edit!

import {server_CBaseEntity} from './CBaseEntity';
// Class size: 0xEA8
// BaseClass: : public CS2::server::CBaseEntity
export const server_CMapVetoPickController  = {
	...server_CBaseEntity,
	m_bPlayedIntroVcd: 1192n, // bool m_bPlayedIntroVcd; |  0x4a8 | Schema_Builtin | Size: 0x1
	m_bNeedToPlayFiveSecondsRemaining: 1193n, // bool m_bNeedToPlayFiveSecondsRemaining; |  0x4a9 | Schema_Builtin | Size: 0x1
	m_dblPreMatchDraftSequenceTime: 1224n, // float64 m_dblPreMatchDraftSequenceTime; |  0x4c8 | Schema_Builtin | Size: 0x8
	m_bPreMatchDraftStateChanged: 1232n, // bool m_bPreMatchDraftStateChanged; |  0x4d0 | Schema_Builtin | Size: 0x1
	m_nDraftType: 1236n, // int32_t m_nDraftType; |  0x4d4 | Schema_Builtin | Size: 0x4
	m_nTeamWinningCoinToss: 1240n, // int32_t m_nTeamWinningCoinToss; |  0x4d8 | Schema_Builtin | Size: 0x4
	m_nTeamWithFirstChoice: 1244n, // int32_t m_nTeamWithFirstChoice[64]; |  0x4dc | Schema_FixedArray | Size: 0x100
	m_nVoteMapIdsList: 1500n, // int32_t m_nVoteMapIdsList[7]; |  0x5dc | Schema_FixedArray | Size: 0x1c
	m_nAccountIDs: 1528n, // int32_t m_nAccountIDs[64]; |  0x5f8 | Schema_FixedArray | Size: 0x100
	m_nMapId0: 1784n, // int32_t m_nMapId0[64]; |  0x6f8 | Schema_FixedArray | Size: 0x100
	m_nMapId1: 2040n, // int32_t m_nMapId1[64]; |  0x7f8 | Schema_FixedArray | Size: 0x100
	m_nMapId2: 2296n, // int32_t m_nMapId2[64]; |  0x8f8 | Schema_FixedArray | Size: 0x100
	m_nMapId3: 2552n, // int32_t m_nMapId3[64]; |  0x9f8 | Schema_FixedArray | Size: 0x100
	m_nMapId4: 2808n, // int32_t m_nMapId4[64]; |  0xaf8 | Schema_FixedArray | Size: 0x100
	m_nMapId5: 3064n, // int32_t m_nMapId5[64]; |  0xbf8 | Schema_FixedArray | Size: 0x100
	m_nStartingSide0: 3320n, // int32_t m_nStartingSide0[64]; |  0xcf8 | Schema_FixedArray | Size: 0x100
	m_nCurrentPhase: 3576n, // int32_t m_nCurrentPhase; |  0xdf8 | Schema_Builtin | Size: 0x4
	m_nPhaseStartTick: 3580n, // int32_t m_nPhaseStartTick; |  0xdfc | Schema_Builtin | Size: 0x4
	m_nPhaseDurationTicks: 3584n, // int32_t m_nPhaseDurationTicks; |  0xe00 | Schema_Builtin | Size: 0x4
	m_OnMapVetoed: 3592n, // GlobalTypes::CEntityOutputTemplate  | Schema_Atomic | Size: 0x20
	m_OnMapPicked: 3624n, // GlobalTypes::CEntityOutputTemplate  | Schema_Atomic | Size: 0x20
	m_OnSidesPicked: 3656n, // GlobalTypes::CEntityOutputTemplate  | Schema_Atomic | Size: 0x20
	m_OnNewPhaseStarted: 3688n, // GlobalTypes::CEntityOutputTemplate  | Schema_Atomic | Size: 0x20
	m_OnLevelTransition: 3720n, // GlobalTypes::CEntityOutputTemplate  | Schema_Atomic | Size: 0x20
}
