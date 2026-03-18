#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"

class server_CCSPlayerController_InventoryServices {
    void **__vftable_0;
    entity2_CNetworkVarChainer __m_pChainEntity;
    char end_pad_1643[0x10];
    uint16_t m_unMusicID;
    char pad_3502[0x2];
    client_MedalRank_t m_rank[6];
    int32_t m_nPersonaDataPublicLevel;
    int32_t m_nPersonaDataPublicCommendsLeader;
    int32_t m_nPersonaDataPublicCommendsTeacher;
    int32_t m_nPersonaDataPublicCommendsFriendly;
    int32_t m_nPersonaDataXpTrailLevel;
    char pad_3503[0xed8];
    uint32_t m_unEquippedPlayerSprayIDs[1];
    char pad_3504[0x4];
    uint64_t m_unCurrentLoadoutHash;
    char m_vecServerAuthoritativeWeaponSlots[0x88];
};
