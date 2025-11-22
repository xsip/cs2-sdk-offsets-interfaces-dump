// generated - do not edit!

import {server_CBaseEntity} from './CBaseEntity';
// Class size: 0x6A0
// BaseClass: : public CS2::server::CBaseEntity
export const server_CVoteController  = {
	...server_CBaseEntity,
	m_iActiveIssueIndex: 1264n, // int32_t m_iActiveIssueIndex; |  0x4f0 | Schema_Builtin | Size: 0x4
	m_iOnlyTeamToVote: 1268n, // int32_t m_iOnlyTeamToVote; |  0x4f4 | Schema_Builtin | Size: 0x4
	m_nVoteOptionCount: 1272n, // int32_t m_nVoteOptionCount[5]; |  0x4f8 | Schema_FixedArray | Size: 0x14
	m_nPotentialVotes: 1292n, // int32_t m_nPotentialVotes; |  0x50c | Schema_Builtin | Size: 0x4
	m_bIsYesNoVote: 1296n, // bool m_bIsYesNoVote; |  0x510 | Schema_Builtin | Size: 0x1
	m_acceptingVotesTimer: 1304n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_executeCommandTimer: 1328n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_resetVoteTimer: 1352n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_nVotesCast: 1376n, // int32_t m_nVotesCast[64]; |  0x560 | Schema_FixedArray | Size: 0x100
	m_playerHoldingVote: 1632n, // GlobalTypes::CPlayerSlot  | Schema_Atomic | Size: 0x4
	m_playerOverrideForVote: 1636n, // GlobalTypes::CPlayerSlot  | Schema_Atomic | Size: 0x4
	m_nHighestCountIndex: 1640n, // int32_t m_nHighestCountIndex; |  0x668 | Schema_Builtin | Size: 0x4
	m_potentialIssues: 1648n, // GlobalTypes::CUtlVector<server::CBaseIssue*>  | Schema_Atomic | Size: 0x18
	m_VoteOptions: 1672n, // GlobalTypes::CUtlVector<char*>  | Schema_Atomic | Size: 0x18
}
