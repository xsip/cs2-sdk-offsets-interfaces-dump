#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "worldrenderer_BakedLightingInfo_t.hpp"

class worldrenderer_WorldNode_t {
    char m_sceneObjects[0x18];
    char m_visClusterMembership[0x18];
    char m_aggregateSceneObjects[0x18];
    char m_clutterSceneObjects[0x18];
    char m_extraVertexStreamOverrides[0x18];
    char m_materialOverrides[0x18];
    char m_extraVertexStreams[0x18];
    char m_aggregateInstanceStreams[0x18];
    char m_vertexAlbedoStreams[0x18];
    char m_layerNames[0x18];
    char m_sceneObjectLayerIndices[0x18];
    CUtlString m_grassFileName;
    worldrenderer_BakedLightingInfo_t m_nodeLightingInfo;
    bool m_bHasBakedGeometryFlag;
    char end_pad_2496[0x7];
};
