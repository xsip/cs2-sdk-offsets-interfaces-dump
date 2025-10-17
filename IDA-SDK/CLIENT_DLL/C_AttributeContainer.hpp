#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "C_EconItemView.hpp"

class C_AttributeContainer {
    char _vtable_pad_23[0x8];
    char m_Providers[0x18];
    int32_t m_iReapplyProvisionParity;
    char m_hOuter[0x4];
    bool m_bPreventLoopback;
    char pad_24[0x3];
    attributeprovidertypes_t m_ProviderType;
    char m_CachedResults[0x18];
    char end_pad_25[0x8];
    C_EconItemView m_Item;
    int32_t m_iExternalItemProviderRegisteredToken;
    char pad_599[0x4];
    uint64_t m_ullRegisteredAsItemID;
};
