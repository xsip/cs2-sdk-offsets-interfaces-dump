#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "client_CAttributeList.hpp"

class client_C_EconItemView {
    char pad_1374[0x8];
    char vTable1365[0x58];
    bool m_bInventoryImageRgbaRequested;
    bool m_bInventoryImageTriedCache;
    char pad_1366[0x1e];
    int32_t m_nInventoryImageRgbaWidth;
    int32_t m_nInventoryImageRgbaHeight;
    char m_szCurrentLoadCachedFileName[260];
    char pad_1367[0x2c];
    bool m_bRestoreCustomMaterialAfterPrecache;
    char pad_1368[0x1];
    uint16_t m_iItemDefinitionIndex;
    int32_t m_iEntityQuality;
    uint32_t m_iEntityLevel;
    char pad_1369[0x4];
    uint64_t m_iItemID;
    uint32_t m_iItemIDHigh;
    uint32_t m_iItemIDLow;
    uint32_t m_iAccountID;
    uint32_t m_iInventoryPosition;
    char pad_1370[0x8];
    bool m_bInitialized;
    bool m_bDisallowSOC;
    bool m_bIsStoreItem;
    bool m_bIsTradeItem;
    int32_t m_iEntityQuantity;
    int32_t m_iRarityOverride;
    int32_t m_iQualityOverride;
    int32_t m_iOriginOverride;
    uint8_t m_ubStyleOverride;
    uint8_t m_unClientFlags;
    char pad_1371[0x12];
    client_CAttributeList m_AttributeList;
    client_CAttributeList m_NetworkedDynamicAttributes;
    char m_szCustomName[161];
    char m_szCustomNameOverride[161];
    char pad_1372[0x2e];
    bool m_bInitializedTags;
    char end_pad_1373[0x7];
};
