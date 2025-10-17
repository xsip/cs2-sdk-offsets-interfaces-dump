#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "CNetworkVarChainer.hpp"

class CCSPlayerController_InventoryServices {
    char _vtable_pad_291[0x8];
    CNetworkVarChainer __m_pChainEntity;
    char end_pad_292[0x10];
    char m_vecNetworkableLoadout[0x18];
    uint16_t m_unMusicID;
    char pad_294[0x2];
    MedalRank_t m_rank[6];
    int32_t m_nPersonaDataPublicLevel;
    int32_t m_nPersonaDataPublicCommendsLeader;
    int32_t m_nPersonaDataPublicCommendsTeacher;
    int32_t m_nPersonaDataPublicCommendsFriendly;
    int32_t m_nPersonaDataXpTrailLevel;
    char m_vecServerAuthoritativeWeaponSlots[0x68];
};
