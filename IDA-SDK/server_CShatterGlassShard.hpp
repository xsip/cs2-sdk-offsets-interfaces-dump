#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_GameTime_t.hpp"

class server_CShatterGlassShard {
    char vTable2760[0x8];
    uint32_t m_hShardHandle;
    char pad_2761[0x4];
    char m_vecPanelVertices[0x18];
    Vector2D m_vLocalPanelSpaceOrigin;
    char m_hModel[0x8];
    char m_hPhysicsEntity[0x4];
    char m_hParentPanel[0x4];
    uint32_t m_hParentShard;
    client_ShatterGlassStressType m_ShatterStressType;
    char pad_2762[0x3];
    Vector m_vecStressVelocity;
    bool m_bCreatedModel;
    char pad_2763[0x3];
    float32 m_flLongestEdge;
    float32 m_flShortestEdge;
    float32 m_flLongestAcross;
    float32 m_flShortestAcross;
    float32 m_flSumOfAllEdges;
    float32 m_flArea;
    client_OnFrame m_nOnFrameEdge;
    char pad_2764[0x3];
    int32_t m_nSubShardGeneration;
    Vector2D m_vecAverageVertPosition;
    bool m_bAverageVertPositionIsValid;
    char pad_2765[0x3];
    Vector2D m_vecPanelSpaceStressPositionA;
    Vector2D m_vecPanelSpaceStressPositionB;
    bool m_bStressPositionAIsValid;
    bool m_bStressPositionBIsValid;
    bool m_bFlaggedForRemoval;
    char pad_2766[0x1];
    entity2_GameTime_t m_flPhysicsEntitySpawnedAtTime;
    char m_hEntityHittingMe[0x4];
    char m_vecNeighbors[0x18];
};
