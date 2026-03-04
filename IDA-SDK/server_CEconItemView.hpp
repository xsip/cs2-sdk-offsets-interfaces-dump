#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "server_CAttributeList.hpp"
#include "server_CAttributeList.hpp"

class server_CEconItemView {
    char pad_2175[0x8];
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    void **__vftable_3;
    void **__vftable_4;
    void **__vftable_5;
    uint16_t m_iItemDefinitionIndex;
    char pad_3613[0x2];
    int32_t m_iEntityQuality;
    uint32_t m_iEntityLevel;
    char pad_3614[0x4];
    uint64_t m_iItemID;
    uint32_t m_iItemIDHigh;
    uint32_t m_iItemIDLow;
    uint32_t m_iAccountID;
    uint32_t m_iInventoryPosition;
    char pad_3615[0x8];
    bool m_bInitialized;
    char pad_3616[0x7];
    server_CAttributeList m_AttributeList;
    server_CAttributeList m_NetworkedDynamicAttributes;
    char m_szCustomName[161];
    char m_szCustomNameOverride[161];
    char end_pad_3617[0x6];
};
