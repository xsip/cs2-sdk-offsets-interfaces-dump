#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "server_CAttributeList.hpp"
#include "server_CAttributeList.hpp"

class server_CEconItemView {
    char pad_1375[0x8];
    char vTable3484[0x30];
    uint16_t m_iItemDefinitionIndex;
    char pad_3485[0x2];
    int32_t m_iEntityQuality;
    uint32_t m_iEntityLevel;
    char pad_3486[0x4];
    uint64_t m_iItemID;
    uint32_t m_iItemIDHigh;
    uint32_t m_iItemIDLow;
    uint32_t m_iAccountID;
    uint32_t m_iInventoryPosition;
    char pad_3487[0x8];
    bool m_bInitialized;
    char pad_3488[0x7];
    server_CAttributeList m_AttributeList;
    server_CAttributeList m_NetworkedDynamicAttributes;
    char m_szCustomName[161];
    char m_szCustomNameOverride[161];
    char end_pad_3489[0x6];
};
