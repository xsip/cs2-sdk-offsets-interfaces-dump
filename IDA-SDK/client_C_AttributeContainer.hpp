#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "client_C_EconItemView.hpp"

class client_C_AttributeContainer {
    char vTable586[0x8];
    char m_Providers[0x18];
    int32_t m_iReapplyProvisionParity;
    char m_hOuter[0x4];
    bool m_bPreventLoopback;
    char pad_587[0x3];
    client_attributeprovidertypes_t m_ProviderType;
    char m_CachedResults[0x18];
    char end_pad_588[0x8];
    client_C_EconItemView m_Item;
    int32_t m_iExternalItemProviderRegisteredToken;
    char pad_1172[0x4];
    uint64_t m_ullRegisteredAsItemID;
};
