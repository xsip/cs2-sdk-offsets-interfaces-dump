#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_CDamageRecord {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    void **__vftable_3;
    void **__vftable_4;
    void **__vftable_5;
    char m_PlayerDamager[0x4];
    char m_PlayerRecipient[0x4];
    char m_hPlayerControllerDamager[0x4];
    char m_hPlayerControllerRecipient[0x4];
    CUtlString m_szPlayerDamagerName;
    CUtlString m_szPlayerRecipientName;
    uint64_t m_DamagerXuid;
    uint64_t m_RecipientXuid;
    float32 m_flBulletsDamage;
    float32 m_flDamage;
    float32 m_flActualHealthRemoved;
    int32_t m_iNumHits;
    int32_t m_iLastBulletUpdate;
    bool m_bIsOtherEnemy;
    client_EKillTypes_t m_killType;
    char end_pad_1700[0x2];
};
