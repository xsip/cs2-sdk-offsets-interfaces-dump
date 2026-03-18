#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_CAttributeManager {
    void **__vftable_0;
    char m_Providers[0x18];
    int32_t m_iReapplyProvisionParity;
    char m_hOuter[0x4];
    bool m_bPreventLoopback;
    char pad_1373[0x3];
    client_attributeprovidertypes_t m_ProviderType;
    char m_CachedResults[0x18];
    char end_pad_1374[0x8];
};
