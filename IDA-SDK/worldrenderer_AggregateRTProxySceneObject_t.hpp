#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class worldrenderer_AggregateRTProxySceneObject_t {
    int16_t m_nLayer;
    char pad_2565[0x6];
    char m_BLASes[0x18];
    char m_Instances[0x18];
    CUtlBinaryBlock m_VBData;
    CUtlBinaryBlock m_IBData;
    CUtlBinaryBlock m_InstanceAlbedoData;
};
