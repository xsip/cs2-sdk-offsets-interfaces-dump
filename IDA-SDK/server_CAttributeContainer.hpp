#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "server_CEconItemView.hpp"

class server_CAttributeContainer {
    void **__vftable_0;
    char m_Providers[0x18];
    int32_t m_iReapplyProvisionParity;
    char m_hOuter[0x4];
    bool m_bPreventLoopback;
    char pad_3027[0x3];
    client_attributeprovidertypes_t m_ProviderType;
    char m_CachedResults[0x18];
    char end_pad_3028[0x8];
    server_CEconItemView m_Item;
};
