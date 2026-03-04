#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"

class client_CCSPlayerController_InventoryServices {
    void **__vftable_0;
    entity2_CNetworkVarChainer __m_pChainEntity;
    char end_pad_1644[0x10];
    char m_vecNetworkableLoadout[0x18];
    uint16_t m_unMusicID;
    char pad_1646[0x2];
    client_MedalRank_t m_rank[6];
    int32_t m_nPersonaDataPublicLevel;
    int32_t m_nPersonaDataPublicCommendsLeader;
    int32_t m_nPersonaDataPublicCommendsTeacher;
    int32_t m_nPersonaDataPublicCommendsFriendly;
    int32_t m_nPersonaDataXpTrailLevel;
    char m_vecServerAuthoritativeWeaponSlots[0x68];
};
