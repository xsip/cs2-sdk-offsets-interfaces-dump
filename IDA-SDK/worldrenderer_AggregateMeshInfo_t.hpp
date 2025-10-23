#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class worldrenderer_AggregateMeshInfo_t {
    uint32_t m_nVisClusterMemberOffset;
    uint8_t m_nVisClusterMemberCount;
    bool m_bHasTransform;
    uint8_t m_nLODGroupMask;
    char pad_2470[0x1];
    int16_t m_nDrawCallIndex;
    int16_t m_nLODSetupIndex;
    Color m_vTintColor;
    worldrenderer_ObjectTypeFlags_t m_objectFlags;
    int32_t m_nLightProbeVolumePrecomputedHandshake;
    uint32_t m_nInstanceStreamOffset;
    uint32_t m_nVertexAlbedoStreamOffset;
    worldrenderer_AggregateInstanceStream_t m_instanceStreams;
    char end_pad_2471[0x3];
};
