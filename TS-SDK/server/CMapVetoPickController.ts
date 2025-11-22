// generated - do not edit!

import {server_CBaseEntity} from './CBaseEntity';
// Class size: 0xF18
// BaseClass: : public CS2::server::CBaseEntity
export const server_CMapVetoPickController  = {
	...server_CBaseEntity,
	m_bPlayedIntroVcd: 1264n, // bool m_bPlayedIntroVcd; |  0x4f0 | Schema_Builtin | Size: 0x1
	m_bNeedToPlayFiveSecondsRemaining: 1265n, // bool m_bNeedToPlayFiveSecondsRemaining; |  0x4f1 | Schema_Builtin | Size: 0x1
	m_dblPreMatchDraftSequenceTime: 1296n, // float64 m_dblPreMatchDraftSequenceTime; |  0x510 | Schema_Builtin | Size: 0x8
	m_bPreMatchDraftStateChanged: 1304n, // bool m_bPreMatchDraftStateChanged; |  0x518 | Schema_Builtin | Size: 0x1
	m_nDraftType: 1308n, // int32_t m_nDraftType; |  0x51c | Schema_Builtin | Size: 0x4
	m_nTeamWinningCoinToss: 1312n, // int32_t m_nTeamWinningCoinToss; |  0x520 | Schema_Builtin | Size: 0x4
	m_nTeamWithFirstChoice: 1316n, // int32_t m_nTeamWithFirstChoice[64]; |  0x524 | Schema_FixedArray | Size: 0x100
	m_nVoteMapIdsList: 1572n, // int32_t m_nVoteMapIdsList[7]; |  0x624 | Schema_FixedArray | Size: 0x1c
	m_nAccountIDs: 1600n, // int32_t m_nAccountIDs[64]; |  0x640 | Schema_FixedArray | Size: 0x100
	m_nMapId0: 1856n, // int32_t m_nMapId0[64]; |  0x740 | Schema_FixedArray | Size: 0x100
	m_nMapId1: 2112n, // int32_t m_nMapId1[64]; |  0x840 | Schema_FixedArray | Size: 0x100
	m_nMapId2: 2368n, // int32_t m_nMapId2[64]; |  0x940 | Schema_FixedArray | Size: 0x100
	m_nMapId3: 2624n, // int32_t m_nMapId3[64]; |  0xa40 | Schema_FixedArray | Size: 0x100
	m_nMapId4: 2880n, // int32_t m_nMapId4[64]; |  0xb40 | Schema_FixedArray | Size: 0x100
	m_nMapId5: 3136n, // int32_t m_nMapId5[64]; |  0xc40 | Schema_FixedArray | Size: 0x100
	m_nStartingSide0: 3392n, // int32_t m_nStartingSide0[64]; |  0xd40 | Schema_FixedArray | Size: 0x100
	m_nCurrentPhase: 3648n, // int32_t m_nCurrentPhase; |  0xe40 | Schema_Builtin | Size: 0x4
	m_nPhaseStartTick: 3652n, // int32_t m_nPhaseStartTick; |  0xe44 | Schema_Builtin | Size: 0x4
	m_nPhaseDurationTicks: 3656n, // int32_t m_nPhaseDurationTicks; |  0xe48 | Schema_Builtin | Size: 0x4
	m_OnMapVetoed: 3664n, // GlobalTypes::CEntityOutputTemplate<GlobalTypes::CUtlSymbolLarge>  | Schema_Atomic | Size: 0x28
	m_OnMapPicked: 3704n, // GlobalTypes::CEntityOutputTemplate<GlobalTypes::CUtlSymbolLarge>  | Schema_Atomic | Size: 0x28
	m_OnSidesPicked: 3744n, // GlobalTypes::CEntityOutputTemplate  | Schema_Atomic | Size: 0x28
	m_OnNewPhaseStarted: 3784n, // GlobalTypes::CEntityOutputTemplate  | Schema_Atomic | Size: 0x28
	m_OnLevelTransition: 3824n, // GlobalTypes::CEntityOutputTemplate  | Schema_Atomic | Size: 0x28
}
