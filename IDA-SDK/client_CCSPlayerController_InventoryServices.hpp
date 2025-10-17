#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"

class client_CCSPlayerController_InventoryServices {
    char vTable854[0x8];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char end_pad_855[0x10];
    char m_vecNetworkableLoadout[0x18];
    uint16_t m_unMusicID;
    char pad_857[0x2];
    client_MedalRank_t m_rank[6];
    int32_t m_nPersonaDataPublicLevel;
    int32_t m_nPersonaDataPublicCommendsLeader;
    int32_t m_nPersonaDataPublicCommendsTeacher;
    int32_t m_nPersonaDataPublicCommendsFriendly;
    int32_t m_nPersonaDataXpTrailLevel;
    char m_vecServerAuthoritativeWeaponSlots[0x68];
};
