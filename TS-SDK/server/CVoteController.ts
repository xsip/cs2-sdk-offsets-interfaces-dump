// generated - do not edit!

import {server_CBaseEntity} from './CBaseEntity';
// Class size: 0x658
// BaseClass: : public CS2::server::CBaseEntity
export const server_CVoteController  = {
	...server_CBaseEntity,
	m_iActiveIssueIndex: 1192n, // int32_t m_iActiveIssueIndex; |  0x4a8 | Schema_Builtin | Size: 0x4
	m_iOnlyTeamToVote: 1196n, // int32_t m_iOnlyTeamToVote; |  0x4ac | Schema_Builtin | Size: 0x4
	m_nVoteOptionCount: 1200n, // int32_t m_nVoteOptionCount[5]; |  0x4b0 | Schema_FixedArray | Size: 0x14
	m_nPotentialVotes: 1220n, // int32_t m_nPotentialVotes; |  0x4c4 | Schema_Builtin | Size: 0x4
	m_bIsYesNoVote: 1224n, // bool m_bIsYesNoVote; |  0x4c8 | Schema_Builtin | Size: 0x1
	m_acceptingVotesTimer: 1232n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_executeCommandTimer: 1256n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_resetVoteTimer: 1280n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_nVotesCast: 1304n, // int32_t m_nVotesCast[64]; |  0x518 | Schema_FixedArray | Size: 0x100
	m_playerHoldingVote: 1560n, // GlobalTypes::CPlayerSlot  | Schema_Atomic | Size: 0x4
	m_playerOverrideForVote: 1564n, // GlobalTypes::CPlayerSlot  | Schema_Atomic | Size: 0x4
	m_nHighestCountIndex: 1568n, // int32_t m_nHighestCountIndex; |  0x620 | Schema_Builtin | Size: 0x4
	m_potentialIssues: 1576n, // GlobalTypes::CUtlVector<server::CBaseIssue*>  | Schema_Atomic | Size: 0x18
	m_VoteOptions: 1600n, // GlobalTypes::CUtlVector<char*>  | Schema_Atomic | Size: 0x18
}
